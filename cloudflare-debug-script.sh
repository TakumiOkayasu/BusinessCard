#!/bin/bash

echo "=== Cloudflare Pages デプロイ診断 ==="

# 1. ビルド出力を確認
echo -e "\n1. ビルド出力フォルダを確認:"
if [ -d "./dist" ]; then
    echo "✅ dist フォルダが存在"
    echo "内容:"
    ls -la ./dist/
elif [ -d "./build" ]; then
    echo "⚠️  build フォルダが存在 (dist ではない)"
    echo "内容:"
    ls -la ./build/
else
    echo "❌ ビルド出力フォルダが見つかりません"
fi

# 2. index.html を確認
echo -e "\n2. index.html を確認:"
if [ -f "./dist/index.html" ]; then
    echo "✅ dist/index.html が存在"
    echo "サイズ: $(wc -c < ./dist/index.html) bytes"
elif [ -f "./build/index.html" ]; then
    echo "⚠️  build/index.html が存在"
else
    echo "❌ index.html が見つかりません"
fi

# 3. wrangler.toml を確認
echo -e "\n3. wrangler.toml を確認:"
if [ -f "./wrangler.toml" ]; then
    echo "✅ wrangler.toml が存在"
    grep -E "(pages_build_output_dir|name|account_id)" wrangler.toml
else
    echo "❌ wrangler.toml が見つかりません"
fi

# 4. ビルドコマンドを確認
echo -e "\n4. package.json のビルドコマンド:"
if [ -f "./package.json" ]; then
    grep -A2 -B2 '"build"' package.json
fi

# 5. Vite 設定を確認
echo -e "\n5. Vite 設定を確認:"
if [ -f "./vite.config.js" ]; then
    echo "vite.config.js:"
    grep -E "(outDir|base)" vite.config.js || echo "特別な設定なし"
elif [ -f "./vite.config.ts" ]; then
    echo "vite.config.ts:"
    grep -E "(outDir|base)" vite.config.ts || echo "特別な設定なし"
fi

echo -e "\n=== 推奨される次のステップ ==="
echo "1. bun run build を実行"
echo "2. 正しいフォルダがビルドされているか確認"
echo "3. wrangler.toml の pages_build_output_dir を修正"
echo "4. bun run deploy を再実行"