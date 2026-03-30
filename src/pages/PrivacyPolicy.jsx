export default function PrivacyPolicy() {
  const style = {
    background: "#000000",
    color: "#ffffff",
    fontFamily: "sans-serif",
    maxWidth: "760px",
    margin: "0 auto",
    padding: "60px 40px",
    fontSize: "15px",
    lineHeight: 1.7,
  };

  const h1Style = { fontSize: "28px", color: "#ffffff" };
  const h2Style = { fontSize: "18px", color: "#ffffff" };
  const subtitleStyle = { color: "#888888" };

  return (
    <div style={style}>
      <h1 style={h1Style}>PRIVACY POLICY</h1>
      <p><em style={subtitleStyle}>Last updated: March 30, 2026</em></p>

      <h2 style={h2Style}>1. Who We Are</h2>
      <p>Mench is a product of PRNTS LLC. We operate the Mench mobile application and website at mench.app. References to "Mench," "we," "us," or "our" refer to PRNTS LLC.</p>

      <h2 style={h2Style}>2. What We Collect</h2>
      <p>We collect information you provide directly, including your name, email address, phone number, and business information when you create an account. We collect financial information including bank account details, payment card information, and transaction history when you use our payments features. We collect identity verification information including government-issued ID and tax identification numbers as required by law and by our payment processors. We collect usage data including how you interact with the app, voice session metadata, and device information. We do not store the content of your voice conversations beyond what is necessary to deliver the service.</p>

      <h2 style={h2Style}>3. How We Use Your Information</h2>
      <p>We use your information to operate and improve the Mench platform, process payments and escrow transactions, verify your identity as required by financial regulations, send transactional communications about your account and contracts, and comply with legal obligations including tax reporting and anti-money laundering requirements.</p>

      <h2 style={h2Style}>4. Payments and Financial Data</h2>
      <p>Mench uses Stripe to process payments, hold escrow funds, and issue the Mench Card. Your financial data is handled in accordance with Stripe's privacy policy in addition to this policy. Mench maintains a wallet balance on your behalf. Funds in your Mench Wallet are held by our payment processor and are not FDIC-insured unless explicitly stated. Mench Card is issued through Stripe Issuing. Card transaction data is used to operate the card program and to improve our advance and financial products.</p>

      <h2 style={h2Style}>5. How We Share Your Information</h2>
      <p>We share your information with Stripe for payment processing, identity verification, and card issuance. We share with Supabase for data storage and with other infrastructure providers necessary to operate the platform. We share with counterparties to your contracts only what is necessary to execute and fulfill those contracts. We do not sell your personal information to third parties for marketing purposes.</p>

      <h2 style={h2Style}>6. Data Retention</h2>
      <p>We retain your account data for as long as your account is active and for a minimum of 7 years after account closure as required by financial regulations.</p>

      <h2 style={h2Style}>7. Your Rights</h2>
      <p>You may request access to, correction of, or deletion of your personal data by contacting us at privacy@mench.app. Deletion requests are subject to our legal retention obligations.</p>

      <h2 style={h2Style}>8. Security</h2>
      <p>We use industry-standard encryption and security practices to protect your data. No method of transmission over the internet is 100% secure. We encourage you to use a strong password and to contact us immediately at security@mench.app if you suspect unauthorized access to your account.</p>

      <h2 style={h2Style}>9. Changes to This Policy</h2>
      <p>We will notify you of material changes to this policy via email or in-app notification. Continued use of Mench after changes take effect constitutes acceptance of the updated policy.</p>

      <h2 style={h2Style}>10. Contact</h2>
      <p>PRNTS LLC / privacy@mench.app / Los Angeles, CA</p>
    </div>
  );
}
