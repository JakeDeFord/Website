# Run the same pipeline as GitHub Actions locally: install, build, Playwright (CI + all browsers), Lighthouse desktop + mobile.
# Usage: powershell -ExecutionPolicy Bypass -File .\scripts\run-ci-tests.ps1
$ErrorActionPreference = 'Continue'
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

$Log = Join-Path $Root ("local-ci-{0:yyyyMMdd-HHmmss}.log" -f (Get-Date))
function Write-Log([string]$m) { $m | Tee-Object -FilePath $Log -Append }

Write-Log "=== Website local CI ==="
Write-Log "Root: $Root"
Write-Log "Log: $Log"

if (-not (Test-Path "package.json")) { Write-Log "ERROR: package.json missing"; exit 1 }

Write-Log "`n--- npm install ---"
npm install 2>&1 | ForEach-Object { Write-Log $_ }
if ($LASTEXITCODE -ne 0) { Write-Log "EXIT npm install: $LASTEXITCODE"; exit $LASTEXITCODE }

Write-Log "`n--- npm run build ---"
npm run build 2>&1 | ForEach-Object { Write-Log $_ }
if ($LASTEXITCODE -ne 0) { Write-Log "EXIT build: $LASTEXITCODE"; exit $LASTEXITCODE }

Write-Log "`n--- Playwright (CI=true, all projects) ---"
$env:CI = 'true'
npm run test:e2e 2>&1 | ForEach-Object { Write-Log $_ }
$e2e = $LASTEXITCODE
Write-Log "EXIT test:e2e: $e2e"

Write-Log "`n--- Lighthouse desktop ---"
npm run lighthouse:desktop 2>&1 | ForEach-Object { Write-Log $_ }
$lh1 = $LASTEXITCODE
Write-Log "EXIT lighthouse:desktop: $lh1"

Write-Log "`n--- Lighthouse mobile ---"
npm run lighthouse:mobile 2>&1 | ForEach-Object { Write-Log $_ }
$lh2 = $LASTEXITCODE
Write-Log "EXIT lighthouse:mobile: $lh2"

Write-Log "`n=== Summary ==="
Write-Log "Playwright exit: $e2e"
Write-Log "Lighthouse desktop exit: $lh1"
Write-Log "Lighthouse mobile exit: $lh2"
Write-Log "Full log: $Log"

if ($e2e -ne 0 -or $lh1 -ne 0 -or $lh2 -ne 0) { exit 1 }
exit 0
