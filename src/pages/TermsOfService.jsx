export default function TermsOfService() {
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
      <h1 style={h1Style}>TERMS OF SERVICE</h1>
      <p><em style={subtitleStyle}>Last updated: March 30, 2026</em></p>

      <h2 style={h2Style}>1. Acceptance</h2>
      <p>By creating a Mench account or using any Mench service, you agree to these Terms of Service and our Privacy Policy. If you do not agree, do not use Mench.</p>

      <h2 style={h2Style}>2. Who Can Use Mench</h2>
      <p>You must be at least 18 years old and legally capable of entering into contracts to use Mench. By using Mench you represent that you meet these requirements.</p>

      <h2 style={h2Style}>3. The Mench Platform</h2>
      <p>Mench provides a business management platform for independent creatives including contract generation, e-signature, payment escrow, accounting tools, distribution tracking, and voice-based management assistance. Mench is a software platform, not a law firm. Nothing in Mench constitutes legal advice. Contract templates are provided as a starting point and you are responsible for ensuring any contract meets your legal needs. We strongly recommend having an attorney review any significant agreement.</p>

      <h2 style={h2Style}>4. Subscriptions</h2>
      <p>Mench offers Free, Pro ($29/mo), Business ($79/mo), and Roster ($199/mo) subscription tiers. Subscriptions are billed monthly or annually. You may cancel at any time. No refunds are issued for partial billing periods. Mench reserves the right to change subscription pricing with 30 days notice.</p>

      <h2 style={h2Style}>5. Escrow Services</h2>
      <p>Mench offers payment escrow as part of the contract workflow. When escrow is used, funds are held by our payment processor on behalf of both parties until release conditions are met. Mench charges a 2.5% fee on each escrow transaction, deducted at the time of release. Escrow funds are not FDIC-insured. Mench is not responsible for disputes between contracting parties beyond facilitating the escrow release process according to the terms set in the contract. In the event of a dispute, Mench may hold funds until the parties reach resolution or until ordered by a court.</p>

      <h2 style={h2Style}>6. Mench Wallet</h2>
      <p>Mench maintains a wallet balance on your behalf funded by escrow releases, direct payments, and advances received through the platform. Wallet balances are held by our payment processor. Mench is not a bank. Wallet funds are not FDIC-insured unless explicitly stated. You may withdraw wallet funds to a linked bank account or spend them via the Mench Card subject to applicable limits.</p>

      <h2 style={h2Style}>7. Mench Card</h2>
      <p>The Mench Card is issued through Stripe Issuing. Use of the Mench Card is subject to the Stripe Issuing cardholder agreement in addition to these terms. Mench Card may be used anywhere the card network is accepted subject to available wallet balance and applicable limits. Mench reserves the right to suspend or terminate card access for violation of these terms or suspected fraudulent activity.</p>

      <h2 style={h2Style}>8. Mench Advance</h2>
      <p>Mench Advance provides short-term advances to eligible users at a flat origination fee of 3–5%. Advances are disbursed directly to approved vendors and are not paid in cash. Repayment is automatic from incoming revenue processed through the platform. Eligibility is determined at Mench's sole discretion based on verified income history. Advance is not a loan and does not accrue interest. The origination fee is the total cost of the advance.</p>

      <h2 style={h2Style}>9. Identity Verification</h2>
      <p>Use of payments features including escrow, wallet, card, and advance requires identity verification. You agree to provide accurate and complete identity information. Mench is required by law to collect and report certain financial information to tax authorities including issuance of 1099 forms where applicable.</p>

      <h2 style={h2Style}>10. Prohibited Uses</h2>
      <p>You may not use Mench for illegal purposes, to process payments for illegal goods or services, to launder money, to impersonate another person, or to circumvent any security or verification feature of the platform.</p>

      <h2 style={h2Style}>11. Termination</h2>
      <p>Mench may suspend or terminate your account for violation of these terms, suspected fraud, or as required by law. Upon termination, any wallet balance will be returned to you after deduction of amounts owed to Mench, subject to verification requirements.</p>

      <h2 style={h2Style}>12. Limitation of Liability</h2>
      <p>Mench's liability to you for any claim arising from use of the platform is limited to the greater of the amount you paid to Mench in the 3 months preceding the claim or $100. Mench is not liable for indirect, incidental, or consequential damages.</p>

      <h2 style={h2Style}>13. Disputes</h2>
      <p>These terms are governed by the laws of the State of California. Any dispute arising from these terms or your use of Mench shall be resolved by binding arbitration in Los Angeles, California under the rules of the American Arbitration Association. You waive the right to participate in a class action.</p>

      <h2 style={h2Style}>14. Changes to These Terms</h2>
      <p>Mench may update these terms at any time. Material changes will be communicated via email or in-app notification. Continued use of Mench after changes take effect constitutes acceptance.</p>

      <h2 style={h2Style}>15. Contact</h2>
      <p>PRNTS LLC / legal@mench.app / Los Angeles, CA</p>
    </div>
  );
}
