import { useState } from "react";

const QUICK_AMOUNTS = [100, 500, 1000, 2500, 5000];

const styles = {
  page: {
    minHeight: "100%",
    padding: "64px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f8fafc",
  },
  card: {
    width: "100%",
    maxWidth: 520,
    overflow: "hidden",
    border: "1px solid #e2e8f0",
    borderRadius: 24,
    background: "#fff",
    boxShadow: "0 24px 60px rgba(15, 23, 42, 0.1)",
  },
  topAccent: {
    height: 6,
    background: "linear-gradient(90deg, #16a34a, #86efac)",
  },
  header: {
    padding: "36px 36px 24px",
    textAlign: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "7px 12px",
    borderRadius: 999,
    background: "#f0fdf4",
    color: "#15803d",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.06em",
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#16a34a",
  },
  title: {
    margin: "18px 0 8px",
    color: "#0f172a",
    fontSize: "clamp(28px, 6vw, 36px)",
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },
  subtitle: {
    margin: 0,
    color: "#64748b",
    fontSize: 15,
    lineHeight: 1.6,
  },
  successContainer: {
    padding: "0 36px 36px",
    textAlign: "center",
  },
  phonePulseWrapper: {
    position: "relative",
    width: 88,
    height: 88,
    margin: "8px auto 20px",
    display: "grid",
    placeItems: "center",
  },
  pulseCircle: {
    position: "absolute",
    inset: 0,
    border: "2px solid #86efac",
    borderRadius: "50%",
    animation: "pulseRing 1.8s ease-out infinite",
  },
  phoneIconBox: {
    position: "relative",
    zIndex: 1,
    width: 68,
    height: 68,
    display: "grid",
    placeItems: "center",
    border: "1px solid #bbf7d0",
    borderRadius: 20,
    background: "#f0fdf4",
  },
  successTitle: {
    margin: "0 0 8px",
    color: "#0f172a",
    fontSize: 24,
    fontWeight: 750,
  },
  successText: {
    margin: "0 0 24px",
    color: "#64748b",
    lineHeight: 1.6,
  },
  receiptBox: {
    marginBottom: 24,
    padding: "16px 18px",
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    background: "#f8fafc",
    textAlign: "left",
  },
  receiptRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    padding: "8px 0",
  },
  receiptLabel: {
    color: "#64748b",
    fontSize: 13,
  },
  receiptValue: {
    color: "#0f172a",
    fontSize: 14,
    fontWeight: 600,
  },
  receiptValueBold: {
    color: "#0f172a",
    fontSize: 16,
    fontWeight: 750,
  },
  receiptMono: {
    color: "#334155",
    fontFamily: "monospace",
    fontSize: 12,
  },
  secondaryBtn: {
    width: "100%",
    padding: "13px 18px",
    border: "1px solid #cbd5e1",
    borderRadius: 12,
    background: "#fff",
    color: "#334155",
    fontWeight: 700,
    cursor: "pointer",
  },
  form: {
    padding: "0 36px 36px",
  },
  errorBanner: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    padding: "12px 14px",
    border: "1px solid #fecaca",
    borderRadius: 12,
    background: "#fef2f2",
    color: "#b91c1c",
    fontSize: 14,
  },
  fieldGroup: {
    marginBottom: 22,
  },
  label: {
    display: "block",
    marginBottom: 9,
    color: "#1e293b",
    fontSize: 14,
    fontWeight: 700,
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  prefix: {
    position: "absolute",
    left: 14,
    zIndex: 1,
    color: "#475569",
    fontSize: 14,
    fontWeight: 600,
    pointerEvents: "none",
  },
  phoneInput: {
    width: "100%",
    minWidth: 0,
    padding: "14px 14px 14px 104px",
    border: "1px solid #cbd5e1",
    borderRadius: 12,
    color: "#0f172a",
    fontSize: 16,
    transition: "border-color 150ms, box-shadow 150ms",
  },
  helperText: {
    display: "block",
    marginTop: 8,
    color: "#64748b",
    fontSize: 12,
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  liveAmountPreview: {
    marginBottom: 9,
    color: "#15803d",
    fontSize: 13,
    fontWeight: 700,
  },
  currencyPrefix: {
    position: "absolute",
    left: 14,
    zIndex: 1,
    color: "#475569",
    fontSize: 14,
    fontWeight: 700,
    pointerEvents: "none",
  },
  amountInput: {
    width: "100%",
    minWidth: 0,
    padding: "14px 14px 14px 58px",
    border: "1px solid #cbd5e1",
    borderRadius: 12,
    color: "#0f172a",
    fontSize: 16,
    transition: "border-color 150ms, box-shadow 150ms",
  },
  chipRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  chip: {
    padding: "7px 12px",
    border: "1px solid #cbd5e1",
    borderRadius: 999,
    background: "#fff",
    color: "#475569",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 150ms, border-color 150ms, color 150ms",
  },
  chipActive: {
    borderColor: "#16a34a",
    background: "#f0fdf4",
    color: "#15803d",
  },
  submitBtn: {
    width: "100%",
    minHeight: 50,
    marginTop: 2,
    padding: "13px 18px",
    border: 0,
    borderRadius: 12,
    background: "#16a34a",
    color: "#fff",
    fontSize: 15,
    fontWeight: 750,
    cursor: "pointer",
    transition: "background-color 150ms, transform 150ms, box-shadow 150ms",
  },
  submitBtnDisabled: {
    opacity: 0.7,
    cursor: "wait",
  },
  btnContent: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  },
};

function Payment() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState("");
  const [checkoutId, setCheckoutId] = useState("");

  // Automatically converts 0712345678, 0112345678, or +254712345678 into 254712345678
  const formatKenyanPhone = (input) => {
    const cleaned = input.replace(/\D/g, "");
    if (cleaned.startsWith("0") && cleaned.length === 10) {
      return "254" + cleaned.slice(1);
    }
    if ((cleaned.startsWith("7") || cleaned.startsWith("1")) && cleaned.length === 9) {
      return "254" + cleaned;
    }
    return cleaned;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formattedPhone = formatKenyanPhone(phone);

    // Validate Kenyan Safaricom/Airtel/Telkom mobile format (2547XXXXXXXX or 2541XXXXXXXX)
    if (!/^254(7|1)\d{8}$/.test(formattedPhone)) {
      setStatus("error");
      setMessage("Please enter a valid Kenyan phone number (e.g., 0712 345 678).");
      return;
    }

    if (!amount || Number(amount) < 1) {
      setStatus("error");
      setMessage("Please enter an amount of at least KSh 1.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/payments/pay/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formattedPhone,
          amount: Number(amount),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || data.detail || "Payment request failed.");
        return;
      }

      if (data.ResponseCode === "0") {
        setStatus("success");
        setCheckoutId(data.CheckoutRequestID || "");
        setMessage("STK Push sent! Unlock your phone and enter your M-Pesa PIN.");
      } else {
        setStatus("error");
        setMessage(data.error || data.ResponseDescription || "Payment request failed.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setStatus("error");
      setMessage("Unable to connect to the server. Make sure Django is running.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setMessage("");
    setCheckoutId("");
  };

  return (
    <div style={styles.page}>
      {/* Embedded CSS for keyframe animations & focus rings */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.7; }
          70% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        .mpesa-input:focus {
          outline: none;
          border-color: #16a34a !important;
          box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.15) !important;
        }
        .mpesa-chip:hover {
          background-color: #f0fdf4 !important;
          border-color: #16a34a !important;
          color: #15803d !important;
        }
        .mpesa-btn:hover:not(:disabled) {
          background-color: #15803d !important;
          transform: translateY(-1px);
          box-shadow: 0 10px 20px -5px rgba(22, 163, 74, 0.4) !important;
        }
        .mpesa-btn:active:not(:disabled) {
          transform: translateY(0);
        }
      `}</style>

      <div style={styles.card}>
        {/* Top Green Accent Bar */}
        <div style={styles.topAccent} />

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            LIPA NA M-PESA
          </div>
          <h1 style={styles.title}>Instant Checkout</h1>
          <p style={styles.subtitle}>
            Fast, secure mobile money payment via STK Push
          </p>
        </div>

        {/* Success State View (Replaces Form once STK Push is sent) */}
        {status === "success" ? (
          <div style={styles.successContainer}>
            <div style={styles.phonePulseWrapper}>
              <div style={styles.pulseCircle} />
              <div style={styles.phoneIconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
            </div>

            <h3 style={styles.successTitle}>Check Your Phone</h3>
            <p style={styles.successText}>{message}</p>

            <div style={styles.receiptBox}>
              <div style={styles.receiptRow}>
                <span style={styles.receiptLabel}>Phone Number</span>
                <span style={styles.receiptValue}>+{formatKenyanPhone(phone)}</span>
              </div>
              <div style={styles.receiptRow}>
                <span style={styles.receiptLabel}>Amount</span>
                <span style={styles.receiptValueBold}>
                  KSh {Number(amount).toLocaleString()}
                </span>
              </div>
              {checkoutId && (
                <div style={styles.receiptRow}>
                  <span style={styles.receiptLabel}>Reference</span>
                  <span style={styles.receiptMono}>{checkoutId.slice(0, 16)}...</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleReset}
              style={styles.secondaryBtn}
            >
              Make Another Payment
            </button>
          </div>
        ) : (
          /* Payment Form */
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Inline Error Alert */}
            {status === "error" && message && (
              <div style={styles.errorBanner} role="alert">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{message}</span>
              </div>
            )}

            {/* Phone Input */}
            <div style={styles.fieldGroup}>
              <label htmlFor="phone" style={styles.label}>
                M-Pesa Phone Number
              </label>
              <div style={styles.inputWrapper}>
                <span style={styles.prefix}>🇰🇪 +254</span>
                <input
                  type="tel"
                  id="phone"
                  className="mpesa-input"
                  style={styles.phoneInput}
                  placeholder="712 345 678"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "loading"}
                  required
                />
              </div>
              <span style={styles.helperText}>
                Supports 07XX, 01XX, or 2547XX formats
              </span>
            </div>

            {/* Amount Input */}
            <div style={styles.fieldGroup}>
              <div style={styles.labelRow}>
                <label htmlFor="amount" style={styles.label}>
                  Amount
                </label>
                {amount && Number(amount) > 0 && (
                  <span style={styles.liveAmountPreview}>
                    KSh {Number(amount).toLocaleString()}
                  </span>
                )}
              </div>

              <div style={styles.inputWrapper}>
                <span style={styles.currencyPrefix}>KSh</span>
                <input
                  type="number"
                  id="amount"
                  className="mpesa-input"
                  style={styles.amountInput}
                  placeholder="0"
                  min="1"
                  step="1"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "loading"}
                  required
                />
              </div>

              {/* Quick Select Pills */}
              <div style={styles.chipRow}>
                {QUICK_AMOUNTS.map((preset) => {
                  const isSelected = Number(amount) === preset;
                  return (
                    <button
                      key={preset}
                      type="button"
                      className="mpesa-chip"
                      onClick={() => setAmount(String(preset))}
                      disabled={status === "loading"}
                      style={{
                        ...styles.chip,
                        ...(isSelected ? styles.chipActive : {}),
                      }}
                    >
                      {preset.toLocaleString()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mpesa-btn"
              disabled={status === "loading"}
              style={{
                ...styles.submitBtn,
                ...(status === "loading" ? styles.submitBtnDisabled : {}),
              }}
            >
              {status === "loading" ? (
                <span style={styles.btnContent}>
                  Processing...
                </span>
              ) : (
                "Pay with M-Pesa"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Payment;
