#!/usr/bin/env bash
# check-scaffold.sh — Verifica que los archivos scaffold existan.
# Exit code 0 = todo OK, 1 = faltan archivos.

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

missing=0
warned=0

check_required() {
  if [ ! -f "$1" ]; then
    echo -e "${RED}FALTA${NC}: $1"
    missing=$((missing + 1))
  fi
}

check_optional() {
  if [ ! -f "$1" ]; then
    echo -e "${YELLOW}SUGERIDO${NC}: $1"
    warned=$((warned + 1))
  fi
}

echo "== Verificando archivos scaffold =="
echo ""

# Archivos requeridos para este proyecto
check_required "CLAUDE.md"
check_required ".planning/STATE.md"
check_required ".planning/GUARDRAILS.md"

# Error boundaries
check_optional "src/app/error.tsx"
check_optional "src/app/not-found.tsx"

# Deploy (cuando se necesite)
check_optional ".nvmrc"
check_optional "Dockerfile"
check_optional ".dockerignore"

echo ""
if [ $missing -gt 0 ]; then
  echo -e "${RED}$missing archivo(s) requerido(s) faltante(s).${NC}"
  exit 1
elif [ $warned -gt 0 ]; then
  echo -e "${YELLOW}$warned archivo(s) sugerido(s) faltante(s).${NC}"
  exit 0
else
  echo -e "${GREEN}Todos los archivos scaffold presentes.${NC}"
  exit 0
fi
