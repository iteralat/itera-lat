#!/usr/bin/env bash
# check-all.sh — Ejecuta todos los scripts de verificación.
# Exit code: 0 si todo OK, 1 si hay errores críticos.

set -uo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
BOLD='\033[1m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
failures=0

run_check() {
  local name="$1"
  local script="$2"
  echo -e "${BOLD}--- $name ---${NC}"
  if bash "$SCRIPT_DIR/$script"; then
    true
  else
    failures=$((failures + 1))
  fi
  echo ""
}

echo -e "${BOLD}========================================${NC}"
echo -e "${BOLD}  ITERA Quality Checks${NC}"
echo -e "${BOLD}========================================${NC}"
echo ""

run_check "Page metadata" "check-page-metadata.sh"
run_check "Archivos scaffold" "check-scaffold.sh"

echo -e "${BOLD}========================================${NC}"
if [ $failures -gt 0 ]; then
  echo -e "${RED}$failures check(s) fallaron.${NC}"
  exit 1
else
  echo -e "${GREEN}Todos los checks pasaron.${NC}"
  exit 0
fi
