# 🔧 GitHub Actions Troubleshooting Guide

## 🚨 **COMMON ISSUES & SOLUTIONS**

### **Issue 1: "Input required and not supplied: key"**

**Cause**: SSH_PRIVATE_KEY secret is missing or empty

**Solution**:
1. Go to: https://github.com/meetshekhat07/brainlogic/settings/secrets/actions
2. Check if `SSH_PRIVATE_KEY` secret exists
3. If missing, add it with this EXACT value (including BEGIN/END lines):

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAACFwAAAAdzc2gtcn
NhAAAAAwEAAQAAAgEAp0I47rDYRD5tz/rBEWRZXTaEa0tX89yUUSdE9mEZ6L4R/sHfGz67
hqy+vd8I81TYeW4i5TC7yd/ybmL1NlwUS+qSmUgFJWLsF2a0hfH/OoN4q7x8YzIQK1EEcv
zXGPRZpkzFaWz0MAVSdOwnm3LlgptEl0fQlD7ikh/4Ml0ZEao+x0kH1H0GRp5tTxHJ246I
6Q+NIre649Rn/5YdNwO6768XD/QQchU/n37YBcN+T0CJJSDrQ5YQLeM/N3AHERERIpzkje
1mAB8luG3VyTXHqdngZz+zhcafFsugIrQCdrCGYH0GR+Ahl1lKzixtGgEHzxLQPKDXQLFk
NT3uoT71fCnb5+WWndRiCaAkF/TMn8ALToGceiKpw0eLwh1MX9LhjAU6/bz8UFV73QF4bH
scJEbfDbef2iky1s92386klFQlZbiAo1730lYk8o4lCrsZ/98dKUK3ST8lpjVUqccjnAvr
EVnGFWKG02X5VdXAp/rigqy8rngzylbMSAw62vIr3S+GE9VF6OJXBNqbZEVF/tXet/5dnE
76OXFq+EnPvI9lY/8aBJWyB/g6cNG87c19vCpFj020i2kyZvjx2g2iSx1kgKXL5dXT9J2E
fcF82gE2GY8mkWkDDDc3RwtDMhJLhj8Vqr9LmtNjimBVTLDmPnNJTZPyzCTzm24Rpqypcm
0AAAdQcAuh9HALofQAAAAHc3NoLXJzYQAAAgEAp0I47rDYRD5tz/rBEWRZXTaEa0tX89yU
USdE9mEZ6L4R/sHfGz67hqy+vd8I81TYeW4i5TC7yd/ybmL1NlwUS+qSmUgFJWLsF2a0hf
H/OoN4q7x8YzIQK1EEcvzXGPRZpkzFaWz0MAVSdOwnm3LlgptEl0fQlD7ikh/4Ml0ZEao+
x0kH1H0GRp5tTxHJ246I6Q+NIre649Rn/5YdNwO6768XD/QQchU/n37YBcN+T0CJJSDrQ5
YQLeM/N3AHERERIpzkje1mAB8luG3VyTXHqdngZz+zhcafFsugIrQCdrCGYH0GR+Ahl1lK
zixtGgEHzxLQPKDXQLFkNT3uoT71fCnb5+WWndRiCaAkF/TMn8ALToGceiKpw0eLwh1MX9
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
-----END OPENSSH PRIVATE KEY-----
```

### **Issue 2: SSH_KNOWN_HOSTS missing**

**Solution**: Add `SSH_KNOWN_HOSTS` secret with value:
```
46.202.163.122 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBNHkwaoMRxrBM60qMfwvEjH1wwbxLVIycR/jC4l0zc6nJ7WNvI1+nW8almzZzDl6cEkMfKPq0fz/HaO3M5VR4tk=
```

## 🔍 **HOW TO CHECK SECRETS**

1. **Go to**: https://github.com/meetshekhat07/brainlogic/settings/secrets/actions
2. **You should see**:
   - `SSH_PRIVATE_KEY` ✅
   - `SSH_KNOWN_HOSTS` ✅

## 🧪 **TEST THE FIX**

After adding/fixing secrets:
1. Make a small change to any file
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test deployment after fixing secrets"
   git push origin main
   ```
3. Check GitHub Actions tab for results

## 📞 **STILL HAVING ISSUES?**

If problems persist:
1. Delete both secrets and re-add them
2. Make sure there are no extra spaces in the secret values
3. Ensure you copied the ENTIRE private key including BEGIN/END lines
4. Check the GitHub Actions logs for specific error messages

## ✅ **SUCCESS INDICATORS**

When working correctly, you'll see:
- ✅ "SSH_PRIVATE_KEY secret exists"
- ✅ "SSH_KNOWN_HOSTS secret exists"  
- ✅ "SSH connection successful"
- ✅ Green checkmark in GitHub Actions
