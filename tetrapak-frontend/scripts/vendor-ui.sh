#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/../assets/react-source"
TARGET_DIR="${1:-.}"
shift || true
UI_DIR="$TARGET_DIR/src/components/ui"

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Target application directory does not exist: $TARGET_DIR" >&2
  exit 1
fi

mkdir -p "$UI_DIR"

copy_component() {
  local name="$1"
  local source="$SOURCE_DIR/components/ui/$name.jsx"

  if [[ ! -f "$source" ]]; then
    echo "Unknown component: $name" >&2
    exit 1
  fi

  case "$name" in
    alert|breadcrumb|button|checkbox|drawer|modal|pagination|sidebar|toast)
      copy_component icons
      ;;
    data-table)
      copy_component badge
      copy_component states
      copy_component icons
      ;;
    dropdown-menu)
      copy_component button
      copy_component icons
      ;;
    search-filter)
      copy_component button
      copy_component dropdown-menu
      copy_component input
      copy_component select-field
      copy_component icons
      ;;
    states)
      copy_component button
      copy_component icons
      ;;
    top-bar)
      copy_component brand
      copy_component icons
      ;;
  esac

  cp "$source" "$UI_DIR/$name.jsx"
}

if [[ "$#" -eq 0 ]]; then
  for source in "$SOURCE_DIR"/components/ui/*.jsx; do
    cp "$source" "$UI_DIR/$(basename "$source")"
  done
  echo "Vendored all reusable UI components into $UI_DIR"
else
  for name in "$@"; do
    copy_component "$name"
  done
  echo "Vendored requested UI components into $UI_DIR"
fi

cp "$SOURCE_DIR/styles.css" "$TARGET_DIR/src/ui-components.css"
echo "Copied neutral component styles to $TARGET_DIR/src/ui-components.css"
echo "Import it once from the app entry point: import \"@/ui-components.css\";"
