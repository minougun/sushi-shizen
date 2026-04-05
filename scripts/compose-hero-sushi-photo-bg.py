#!/usr/bin/env python3
"""
ヒーロー用 sushi-photo-0.png: 近白背景を bg 画像で置換し、皿領域の彩度を落としてニュートラル化。
依存: Pillow のみ（numpy 不要）。

使用例:
  python3 scripts/compose-hero-sushi-photo-bg.py

参照（ローカル）:
  元: images/photo/sushi-photo-0.original.png
  背景: images/bg/5453670612.png
  出力: images/photo/sushi-photo-0.png
"""
from __future__ import annotations

import argparse
import math
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def cover_crop_resize(bg: Image.Image, tw: int, th: int) -> Image.Image:
    bw, bh = bg.size
    scale = max(tw / bw, th / bh)
    nw, nh = int(bw * scale + 0.5), int(bh * scale + 0.5)
    bg = bg.resize((nw, nh), Image.Resampling.LANCZOS)
    x0 = (nw - tw) // 2
    y0 = (nh - th) // 2
    return bg.crop((x0, y0, x0 + tw, y0 + th))


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--input", type=Path, default=ROOT / "images/photo/sushi-photo-0.original.png")
    p.add_argument("--bg", type=Path, default=ROOT / "images/bg/5453670612.png")
    p.add_argument("--output", type=Path, default=ROOT / "images/photo/sushi-photo-0.png")
    p.add_argument(
        "--white-cut",
        type=int,
        default=242,
        help="RGB がすべてこの値以上なら背景（アンチエイリアス対策で 248 より緩め）",
    )
    args = p.parse_args()

    fg = Image.open(args.input).convert("RGBA")
    w, h = fg.size
    px = fg.load()
    bg_img = cover_crop_resize(Image.open(args.bg).convert("RGBA"), w, h)
    bp = bg_img.load()

    cx, cy = w * 0.5, h * 0.58
    max_r = max(w, h) * 0.42

    for y in range(h):
        for x in range(w):
            r, g, b, al = px[x, y]
            luma = 0.299 * r + 0.587 * g + 0.114 * b
            maxc = max(r, g, b)
            minc = min(r, g, b)
            sat = 0.0 if maxc < 1 else (maxc - minc) / maxc

            dist = math.hypot(x - cx, y - cy)

            if r >= args.white_cut and g >= args.white_cut and b >= args.white_cut:
                br, bgc, bb, _ = bp[x, y]
                px[x, y] = (br, bgc, bb, 255)
                continue

            skin = (r > g + 18) and (r > b + 5) and luma > 70
            plate_like = (
                (luma < 210)
                and (luma > 22)
                and (sat > 0.05)
                and (dist < max_r)
                and (y > h * 0.20)
                and (not skin)
                and (luma < 188)
            )
            if plate_like:
                gry = luma
                # 皿の色味を弱め、明るいグレー皿に近づける
                nr = int(gry * 0.22 + 232)
                ng = int(gry * 0.22 + 232)
                nb = int(gry * 0.22 + 232)
                br, bgc, bb, _ = bp[x, y]
                blend = 0.62
                tr = int(nr * blend + br * (1 - blend))
                tg = int(ng * blend + bgc * (1 - blend))
                tb = int(nb * blend + bb * (1 - blend))
                px[x, y] = (tr, tg, tb, 255)

    fg.save(args.output, optimize=True)
    print("wrote", args.output)


if __name__ == "__main__":
    main()
