export type FaqCategory =
  | 'Quick Links'
  | 'Getting Started & Account'
  | 'Security & Privacy'
  | 'Transactions & Orders'
  | 'Merchants'
  | 'General & Legal'
  | 'Support & Community'
  | 'Practical Use Cases';

export const faqCategories: FaqCategory[] = [
  'Quick Links',
  'Getting Started & Account',
  'Security & Privacy',
  'Transactions & Orders',
  'Merchants',
  'General & Legal',
  'Support & Community',
  'Practical Use Cases',
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqData: FaqItem[] = [
  {
    id: 'app-links-user',
    question: 'App Links (Users)',
    answer: `- User App: https://app.p2p.lol/\n- P2P.me App: https://app.p2p.me/`,
    category: 'Quick Links',
  },
  {
    id: 'app-links-merchant',
    question: 'App Links (Merchants)',
    answer: `- Merchant Page: https://lp.p2p.me/`,
    category: 'Quick Links',
  },
  {
    id: 'bank-freeze-form',
    question: 'Bank Freeze? (Fill the Google form)',
    answer: `If your bank account is frozen, please fill out this form: https://forms.gle/PSrHjpK4kD6ndHr29\n\nNote: Feel free to DM @Jaybhargav811(Lawyer) if you have any extra details or screenshots to share.`,
    category: 'Quick Links',
  },
  {
    id: 'quick-faq-protection',
    question: 'How does P2P.me protect you from account freeze fraud?',
    answer: `Learn more here: https://x.com/P2Pdotme/status/1938274354024091839`,
    category: 'Quick Links',
  },
  {
    id: 'quick-faq-legal',
    question: 'Is P2P.me legal?',
    answer: `Learn more here: https://x.com/P2Pdotme/status/1940294965051236647`,
    category: 'Quick Links',
  },
  {
    id: 'quick-faq-buying-selling',
    question: 'Buying or Selling USDC on P2P.me',
    answer: `Learn more here: https://x.com/ParaParru/status/1927209708915487049`,
    category: 'Quick Links',
  },
  {
    id: 'quick-faq-deposit',
    question: 'Want to deposit USDC from a CEX or wallet to your P2P.me wallet?',
    answer: `Learn more here: https://x.com/Infinix_264/status/1936806954346918272`,
    category: 'Quick Links',
  },
  {
    id: 'what-is-p2pme',
    question: 'What is P2P.me?',
    answer: `P2P.me is a decentralized, peer-to-peer protocol for swapping fiat currency and cryptocurrency. Functioning like a "Uniswap for fiat," it provides a global, permissionless, and secure alternative to unregulated P2P markets such as Telegram or WhatsApp groups.`,
    category: 'General & Legal',
  },
  {
    id: 'increase-rp-limit',
    question: 'How can I increase my RP and transaction limit on P2P.me?',
    answer: `To increase your RP (Reputation Points) and unlock higher transaction limits:
Go to the home screen and click on "Increase Transaction Limit." There you'll find tasks that, once completed, will earn you RP.

Ways to earn RP:
- Get Recommendations: Each recommendation from a user with 150 RP or more gives you +50 RP.
- Verify Socials: Connect and verify your social accounts to earn RP.
- Hit Trade Milestones:
  - Complete 5 trades: +75 RP
  - Complete 25 trades: +75 RP
- (Optional) Complete ZK-KYC (Aadhaar proof): +150 RP

Note: If you see a "Not Eligible" error during verification, it means you didn't meet the required criteria to earn RP from that task.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'get-referral-link',
    question: 'How can I get my referral link on P2P.me?',
    answer: `To unlock your referral link, you need to earn 150 RP (Reputation Points). Once you reach this threshold, the referral option will be activated in your account, and you'll be able to share your unique link with friends.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'social-verification-failed',
    question: 'Why is my social verification not working on P2P.me?',
    answer: `Social verification is based on a set of criteria defined by the protocol. If your social media profile does not meet these standards (e.g., account age, activity level), the verification will not be successful, and you will not receive RP for that task.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'new-user-order-limit',
    question: 'Can a new user place multiple orders on P2P.me in a day?',
    answer: `Sell Orders: You can place up to 10 sell orders per day by default, each with a limit of 100 USDC per order. No verification is required for selling.

Buy Orders: Verification is required to place even a single buy order. After completing ZK verification, you can place up to 5 buy orders per day, each with a limit of up to 500 USDC per order.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'community-verification-info',
    question: 'How do I join and participate in the Telegram community?',
    answer: `When you join the official Telegram group, you will receive a welcome message with a verification link. You must complete this verification to gain the ability to send messages. If you can't find the message, simply exit the group and rejoin to receive a new verification prompt.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'deposit-usdc-wallet',
    question: 'How can I deposit USDC into my P2P.me wallet?',
    answer: `You can send USDC from any Centralized Exchange (CEX) or external wallet to your P2P.me wallet. Ensure you are sending USDC on the Base network.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'what-is-zk-proof-detailed',
    question: 'What is ZK-KYC and how is it better than traditional KYC?',
    answer: `ZK-KYC (Zero-Knowledge Know Your Customer) is a revolutionary privacy-preserving verification system. Unlike traditional KYC, which is vulnerable to fakes and data leaks, ZK-KYC confirms your identity without storing or revealing your personal data. It generates a zk-encrypted proof on-chain to verify you are a real person, making it tamper-proof and ideal for decentralized platforms.`,
    category: 'Security & Privacy',
  },
  {
    id: 'account-freezes-explained',
    question: 'How does P2P.me protect users from fraud and account freezes?',
    answer: `The protocol uses a powerful, multi-layered defense system:

First-Degree Protection: A ZK-Social Verification system acts as the first line of defense, preventing known fraudsters from even accessing the platform.

Second-Degree Protection: It is highly recommended to use a separate bank account exclusively for P2P transactions. This isolates your primary funds from any potential risk.

Third-Degree Protection: In the extremely rare event your account is frozen, the expert legal team at Unfreeze.in provides completely free assistance to resolve the issue swiftly.`,
    category: 'Security & Privacy',
  },
  {
    id: 'bank-account-frozen-support',
    question: 'What if my bank account got frozen because of P2P on your platform?',
    answer: `If your account gets frozen by p2p.me, then we will help you to unfreeze it. We have a dedicated team to unfreeze accounts. To date, we have completed over 35,000 orders without any bank freezes. We have a reputation system which doesn't allow frauds.`,
    category: 'Security & Privacy',
  },
  {
    id: 'government-data-zk-kyc-explained',
    question: 'Can the government see my data if I use zk-KYC on P2P.me?',
    answer: `No. Your personal data, such as your Aadhaar number, is never stored in any database or revealed to anyone. It is used only on your device to generate an encrypted proof. Only the proof is visible on-chain, not your data. If you opt out of ZK-KYC, you remain completely anonymous.`,
    category: 'Security & Privacy',
  },
  {
    id: 'how-p2pme-is-safe',
    question: 'How is P2P.me safe? How does it protect you from account freeze or fraud?',
    answer: `P2P.me uses a multi-layered protection system to keep users safe:
1. First-degree protection: The platform uses a ZK-Social Verification system that blocks fraudsters from ever accessing the protocol. With over 32,000 transactions completed, there have been zero account freeze incidents.
2. Second-degree protection: Users are advised to use a separate bank account exclusively for P2P offramps. This minimizes risk by keeping your main financial accounts isolated. Opening a new account is easy through services like Jio Payments Bank or Airtel Payments Bank in India.
3. Third-degree protection: In the rare event that your account is frozen, the legal team at Unfreeze.in will assist you in unfreezing it completely free of charge.
This layered approach makes P2P.me one of the safest ways to transact.`,
    category: 'Security & Privacy',
  },
  {
    id: 'tax-concerns-zk-kyc',
    question: 'Does using P2P.me or ZK-KYC create tax concerns?',
    answer: `Using the protocol does not automatically generate tax reports. You are fully responsible for reporting any capital gains and paying your taxes in accordance with your local laws. As a decentralized system, P2P.me cannot manage tax obligations on your behalf.`,
    category: 'Security & Privacy',
  },
  {
    id: 'zk-kyc-vs-traditional-kyc',
    question: 'What makes zk-KYC better than traditional KYC?',
    answer: `Traditional KYC can be easily manipulated by AI-generated faces or fake documents. ZK-KYC offers a privacy-preserving, tamper-proof, and decentralised-friendly solution that confirms a user's legitimacy without exposing personal data.`,
    category: 'Security & Privacy',
  },
  {
    id: 'zk-proof-generation-location',
    question: 'Where are the ZK proofs generated in the Reclaim Protocol?',
    answer: `All ZK proofs within the Reclaim Protocol are generated on the client-side, meaning directly on your device (phone or computer). This ensures that you maintain full control over your data and cryptographic keys, as no sensitive information ever leaves your device to be processed by a third-party server.`,
    category: 'Security & Privacy',
  },
  {
    id: 'scan-and-pay-legality',
    question: 'Is it legal to use the "Scan & Pay" method if the USDC used is later traced back to a fraudulent or suspicious INR source?',
    answer: `The "Scan & Pay" method is designed to divide incoming USDC into smaller UPI transactions, which are then paid out to regular vendors or shops. In cases where suspicious or fraudulently sourced INR is converted into USDC and then used via Scan & Pay, the money trail typically ends at the merchant level due to this fragmentation. While P2P.me merchant accounts may sometimes face freezes from banks or authorities, P2P.me offers full refund support for affected merchants. For shopkeepers or vendors receiving payments through legitimate merchant current accounts, any impact is minimal and can usually be resolved by submitting a simple affidavit to the bank or cybercrime authorities. P2P.me also provides free support in such cases to ensure smooth resolution.`,
    category: 'Security & Privacy',
  },
  {
    id: 'wrong-chain-recovery',
    question: "I sent funds to the wrong chain. How can I recover them?",
    answer: `If you accidentally sent USDC to a non-Base chain (like BNB Chain), you can recover them using a cross-chain bridge:

1. Connect your P2P.me wallet to a trusted bridge like Jumper.Exchange or Relay Bridge.
2. Ensure you have a small amount of that chain's native token (e.g., BNB) in your wallet to pay for gas fees.
3. Initiate the bridge transfer to move the USDC from the incorrect chain back to the Base network.`,
    category: 'Transactions & Orders',
  },
  {
    id: 'daily-transaction-limits',
    question: 'How many transactions can I do per day?',
    answer: `If a new user is without recommendation, per day there is 1 buy order and 10 sell orders.
After at least one verification is complete or a recommendation is received:
- Per day, there are 5 buy orders and 10 sell orders.
- Per month, there are 25 buy orders and 300 sell orders.`,
    category: 'Transactions & Orders',
  },
  {
    id: 'withdraw-usdc-no-kyc',
    question: 'Can I withdraw USDC without KYC and remain anonymous?',
    answer: `Yes. You can withdraw up to 1,000 USDC per day by placing multiple small sell orders (up to 10 per day). This allows for private off-ramping without needing to complete the ZK-KYC process.`,
    category: 'Transactions & Orders',
  },
  {
    id: 'supported-network-usdc',
    question: 'What network does P2P.me use?',
    answer: `P2P.me exclusively supports USDC on the Base network for all buying and selling. Base is an Ethereum Layer 2 (L2) solution known for its speed and low transaction costs. You can verify all activity on BaseScan.`,
    category: 'Transactions & Orders',
  },
  {
    id: 'cancel-order-initiated-no',
    question: "Is it possible to cancel an order on P2P.me after it's been initiated?",
    answer: `No, once an order is initiated on P2P.me, it cannot be canceled. Please make sure to double-check all details before confirming a transaction.`,
    category: 'Transactions & Orders',
  },
  {
    id: 'cancel-order-rules-detailed',
    question: 'Can I cancel an order on P2P.me?',
    answer: `- Buy Orders: Yes, a user can cancel their own buy order at any time before it is fulfilled by a merchant.
- Sell Orders: No, users cannot cancel sell orders. Only the fulfilling merchant has this option.
- Automatic Cancellation: Scan & Pay orders expire in 8 minutes. Standard buy/sell orders expire in 1 hour if not completed.`,
    category: 'Transactions & Orders',
  },
  {
    id: 'bridging-asset-websites',
    question: 'Which is the best website to use for bridging assets?',
    answer: `Two of the most reliable and widely used bridging platforms are:
- Jumper.Exchange
- Relay Bridge
Both platforms offer low gas fees and support a wide range of chains.`,
    category: 'Transactions & Orders',
  },
  {
    id: 'how-to-become-merchant',
    question: 'How can I become a merchant on P2P.me?',
    answer: `To become a merchant and provide liquidity, you need to sign up at lp.p2p.me and meet two requirements:

Bank Account: A valid Indian bank account, preferably dedicated solely to P2P.me transactions.

USDC Stake: A minimum stake of 500 USDC. A larger stake increases the number of orders you are assigned.`,
    category: 'Merchants',
  },
  {
    id: 'merchant-earnings-explained',
    question: 'What are the earnings for a merchant?',
    answer: `Merchants earn a 1% commission on the total value of every transaction they fulfill. This reward is paid out in USDC directly to your in-app wallet.`,
    category: 'Merchants',
  },
  {
    id: 'merchant-risks-explained',
    question: 'What are the risks for merchants?',
    answer: `Account Freeze Risk: This risk is exceptionally low (estimated at 1 in 1,000 transactions) thanks to the protocol's effective fraud-filtering systems.

Regulatory Risk: Merchants are responsible for ensuring their own compliance with local laws and tax obligations.`,
    category: 'Merchants',
  },
  {
    id: 'merchant-availability-hours',
    question: 'When are merchants most active?',
    answer: `Merchant availability is highest between 6:00 AM and 12:00 AM (midnight). Orders placed outside these hours may experience slightly longer fulfillment times.`,
    category: 'Merchants',
  },
  {
    id: 'is-p2pme-legal-explained',
    question: 'Is P2P.me legal and does it comply with legal standards?',
    answer: `P2P.me is a decentralized protocol, making its legal status subject to local regulatory interpretation. However, it is built with compliance at its core, integrating features like ZK-KYC and reputation-based transaction limits to actively prevent fraud, money laundering, and other financial crimes.`,
    category: 'General & Legal',
  },
  {
    id: 'legal-compliance-standards',
    question: 'Does P2P.me comply with legal standards?',
    answer: `Yes. While it doesn't custody user funds, P2P.me is built with compliance in mind. It integrates:
- ZK-KYC for private yet verifiable identity checks
- Reputation-based transaction limits
This helps prevent fraud, financial crimes, and money laundering.`,
    category: 'General & Legal',
  },
  {
    id: 'vpn-needed-explanation',
    question: 'Why might I need a VPN to access P2P.me?',
    answer: `Some jurisdictions mistakenly block access to decentralized protocols as if they were centralized businesses. A VPN allows you to bypass these restrictions. P2P.me is actively working to educate regulators to foster better understanding and prevent these issues.`,
    category: 'General & Legal',
  },
  {
    id: 'p2pme-alternatives',
    question: 'What are the alternatives to P2P.me?',
    answer: `Without a platform like P2P.me, users often turn to high-risk options like Telegram OTC channels, WhatsApp groups, and unregistered P2P dealers. These alternatives offer no user protection, have zero accountability, and are common grounds for financial fraud.`,
    category: 'General & Legal',
  },
  {
    id: 'unregulated-p2p-problem-scope',
    question: 'What problem does P2P.me solve?',
    answer: `It directly addresses the massive, unregulated P2P markets where billions of dollars move off-chain with no regulatory visibility, as highlighted by Chainalysis. These channels lack accountability and are rife with scams, posing a significant risk to users and national security. P2P.me brings these transactions into a more secure and traceable environment.`,
    category: 'General & Legal',
  },
  {
    id: 'p2pme-solution',
    question: 'How does P2P.me solve this problem?',
    answer: `P2P.me creates a regulated-by-code alternative that:
- Preserves privacy
- Prevents fraud
- Leaves an on-chain audit trail
- Supports global use while cooperating locally`,
    category: 'General & Legal',
  },
  {
    id: 'p2pme-mission',
    question: 'What is the mission behind P2P.me?',
    answer: `The core mission is to fix the broken, high-risk P2P ecosystem. By creating a "regulated-by-code" platform, P2P.me offers a solution that preserves user privacy, prevents fraud, and provides a transparent on-chain audit trail, benefiting users, governments, and the entire financial ecosystem.`,
    category: 'General & Legal',
  },
  {
    id: 'messaging-guidelines-p2pme',
    question: 'What are the official community messaging guidelines?',
    answer: `To accurately reflect the decentralized nature of the protocol, please use precise language:

Instead of: "Our team of merchants will process your payment."
Say: "The protocol tracks merchant performance, which ensures faster transactions."

Instead of: "Service is slow right now."
Say: "During late-night hours, merchant activity is lower, so your order may take slightly longer to be accepted. For faster fulfillment, try placing your order during peak hours (9 AM to midnight)."`,
    category: 'Support & Community',
  },
  {
    id: 'support-contacts-p2pme',
    question: 'Who should I contact for specific issues?',
    answer: `General Questions: Ask in the main Customer Support group on Telegram.

Order Disputes: @VibeSMasteru or @jessica_base_eth

Technical Issues: @writ_it or @jassdotgg

ZK-Related Queries: @aashritgarg

Bank Freeze Emergency: Fill out this Google Form and DM @Jaybhargav811 on Telegram with any screenshots or extra details.`,
    category: 'Support & Community',
  },
  {
    id: 'scan-and-pay-ecommerce',
    question: 'How can I shop on e-commerce websites using P2P.me?',
    answer: `You can use P2P.me to shop on any e-commerce website that provides a "Pay by UPI QR code" option on its desktop version. This allows you to pay directly from your crypto balance.

Examples: Zepto, BookMyShow, MakeMyTrip, and many others.

Process: At checkout, select the UPI QR code payment option on the merchant's website. Scan this QR code using the "Scan & Pay" feature in your P2P.me app to complete the payment.`,
    category: 'Practical Use Cases',
  },
  {
    id: 'scan-and-pay-gift-cards',
    question: 'How can I buy gift cards using P2P.me?',
    answer: `You can buy digital gift cards from platforms that offer UPI payments using the "Scan & Pay" feature.

Step-by-Step Guide:
1. Go to a Gift Card Platform: Open a website that sells gift cards.
2. Select Your Gift Card: Choose the brand and amount you wish to purchase.
3. Choose UPI at Checkout: On the payment page, select the UPI payment option to generate a QR code.
4. Use P2P.me "Scan & Pay": Open your P2P.me app, select "Scan & Pay," and scan the QR code from the website.
5. Confirm the Transaction: The app will handle the conversion from USDC to INR and complete the payment seamlessly.`,
    category: 'Practical Use Cases',
  },
  {
    id: 'scan-and-pay-overview',
    question: 'What is the "Scan & Pay" feature?',
    answer: `The "Scan & Pay" feature is a powerful tool that allows you to spend your USDC at any online merchant that accepts UPI QR code payments. It converts your USDC to INR and completes the payment seamlessly.`,
    category: 'Practical Use Cases',
  },
];
