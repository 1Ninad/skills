# Reusable component dependency map

The source kit is intentionally vendorable. Copy the requested component file(s)
and the small transitive dependencies below into the consuming React app's
`src/components/ui/` directory. The `scripts/vendor-ui.sh` command performs this
selection automatically.

| Component | Direct source dependencies |
| --- | --- |
| `alert` | `icons` |
| `breadcrumb` | `icons` |
| `button` | `icons` |
| `checkbox` | `icons` |
| `data-table` | `badge`, `states`, `icons` |
| `drawer` | `icons` |
| `dropdown-menu` | `button`, `icons` |
| `modal` | `icons` |
| `pagination` | `icons` |
| `search-filter` | `button`, `dropdown-menu`, `input`, `select-field`, `icons` |
| `sidebar` | `icons` |
| `states` | `button`, `icons` |
| `toast` | `icons` |
| `top-bar` | `brand`, `icons` |

`badge`, `brand`, `field`, `input`, `radio-group`, `select-field`, and `tabs`
have no additional local component dependencies except where listed above.

All icons in `icons.jsx` are inline SVG React components. The source kit does
not require Lucide, Material Icons, Font Awesome, Heroicons, or an icon font.
