package service

import (
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"strings"
)

const legacySiteLogoSHA256 = "4e08a16a8e952c61886fb1e6b91070aa62297c1dd7d87d6dcb9a8bccd10f402f"

// normalizeLegacySiteLogo migrates the prior embedded logo asset to the
// current static SVG without changing unrelated administrator-provided logos.
func normalizeLegacySiteLogo(value string) string {
	const prefix = "data:image/png;base64,"
	if !strings.HasPrefix(value, prefix) {
		return value
	}

	data, err := base64.StdEncoding.DecodeString(strings.TrimPrefix(value, prefix))
	if err != nil {
		return value
	}
	sum := sha256.Sum256(data)
	if hex.EncodeToString(sum[:]) == legacySiteLogoSHA256 {
		return "/logo.svg"
	}
	return value
}
