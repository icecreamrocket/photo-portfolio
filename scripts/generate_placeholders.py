from PIL import Image, ImageDraw, ImageFont
import os

out_dir = "public/photos"
os.makedirs(out_dir, exist_ok=True)

# id, orientation, label, base hue
specs = [
    (1, "landscape", "TRAVEL — SINGAPORE", (60, 50, 48)),
    (2, "portrait", "STREET — KUALA LUMPUR", (45, 45, 55)),
    (3, "square", "PORTRAIT — PENANG", (58, 44, 40)),
    (4, "landscape", "LANDSCAPE — JOHOR BAHRU", (40, 52, 46)),
    (5, "portrait", "STREET — SINGAPORE", (50, 46, 52)),
    (6, "square", "TRAVEL — BANGKOK", (55, 48, 42)),
]

dims = {
    "landscape": (1600, 1067),
    "portrait": (1067, 1600),
    "square": (1400, 1400),
}

for pid, orient, label, color in specs:
    w, h = dims[orient]
    img = Image.new("RGB", (w, h), color)
    draw = ImageDraw.Draw(img)

    # subtle diagonal gradient effect using overlay rectangles
    for i in range(0, w, 4):
        shade = int(20 * (i / w))
        draw.line([(i, 0), (0, i * h / w if w else 0)], fill=tuple(min(c + shade, 255) for c in color), width=4)

    text = f"No. {pid:03d}  {label}"
    try:
        font = ImageFont.load_default()
    except Exception:
        font = None

    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((w - tw) / 2, (h - th) / 2), text, fill=(200, 195, 188), font=font)

    img.save(f"{out_dir}/sample-{pid:02d}.jpg", quality=85)
    print(f"created sample-{pid:02d}.jpg ({w}x{h})")
