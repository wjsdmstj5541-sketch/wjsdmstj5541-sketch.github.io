#!/bin/zsh
# PDF 다시 만들기:  ./make-pdf.sh        (실제 사진이 있는 프로젝트만)
#                  ./make-pdf.sh all    (예시 프로젝트까지 전부)
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
Q=""; [[ "$1" == "all" ]] && Q="?all=1"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=10000 \
  --print-to-pdf="$PWD/SEO-HARU-Portfolio.pdf" "file://$PWD/print.html$Q" 2>/dev/null
echo "→ $PWD/SEO-HARU-Portfolio.pdf"
