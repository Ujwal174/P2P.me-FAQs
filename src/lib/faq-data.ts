export type FaqCategory =
  | 'Quick Links'
  | 'Getting Started & Account'
  | 'Security & Privacy'
  | 'Transactions & Orders'
  | 'Merchants'
  | 'General & Legal'
  | 'Support & Community';

export const faqCategories: FaqCategory[] = [
  'Quick Links',
  'Getting Started & Account',
  'Security & Privacy',
  'Transactions & Orders',
  'Merchants',
  'General & Legal',
  'Support & Community',
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
    id: 'increase-rp-limit',
    question: 'How can I increase my RP and transaction limit on P2P.me?',
    answer: `To increase your RP (Reputation Points) and unlock higher transaction limits:
Go to the home screen and click on “Increase Transaction Limit.” There you’ll find tasks that, once completed, will earn you RP.

Ways to earn RP:
- Get Recommendations: Each recommendation from a user with 150 RP or more gives you +50 RP.
- Verify Socials: Connect and verify your social accounts to earn RP.
- Hit Trade Milestones:
  - Complete 5 trades: +75 RP
  - Complete 25 trades: +75 RP
- (Optional) Complete ZK-KYC (Aadhaar proof): +150 RP

Note: If you see a “Not Eligible” error during verification, it means you didn’t meet the required criteria to earn RP from that task.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'get-referral-link',
    question: 'How can I get my referral link on P2P.me?',
    answer: `To unlock your referral link, you need to earn 150 RP (Reputation Points). Once you reach this threshold, the referral option will be activated in your account, and you’ll be able to share your unique link with friends.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'social-verification-failed',
    question: 'Why is my social verification not working on P2P.me?',
    answer: `Social Verification only works if your account meets the required criteria. If your profile matches the system’s standards, then it will be verified — otherwise, it won’t.
Also, you cannot reach the transaction milestone or perform transactions without earning RP.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'new-user-order-limit',
    question: 'Can a new user place multiple orders on P2P.me in a day?',
    answer: `By default, new users can place only one order per day. If they wish to place a second order on the same day, they must verify their account through the provided verification process. They can place up to 10 sell orders as usual.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'community-verification-info',
    question: 'Asking for Verification to @P2Pdotme Community',
    answer: `Hey! On joining the group, you will see a welcome message along with a request to verify yourself. Once you complete the verification, you will be able to send messages in the group.
If you want to see the welcome message with the verify option again, please fully exit the group and rejoin. This will refresh the message and allow you to complete the verification process properly.`,
    category: 'Getting Started & Account',
  },
  {
    id: 'what-is-zk-proof-detailed',
    question: 'What is zk-proof?',
    answer: `zk-KYC prevents money laundering just like KYC does identifying users who do transactions and additionally, zk-KYC keeps users private.
ZK-KYC lets P2P.me verify users without storing their data anywhere, keeping them completely private.`,
    category: 'Security & Privacy',
  },
  {
    id: 'account-freezes-explained',
    question: 'What about account freezes?',
    answer: `P2P.me prevents account-freeze fraud by:
- Limiting initial transaction power via RP tiers
- Encouraging verified identities through ZK-KYC & social links
- Using an analytics-driven matching engine to reduce risk
- Penalizing misuse and handling disputes fairly
- Structuring merchant flows to reduce exposure

Read the article to know more: https://x.com/p2pdotme/status/1938274354024091839`,
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
    answer: `No, personal data is not stored in any database. Your Aadhaar is only used to generate a zk-encrypted on-chain proof that confirms you are a real human. The data remains encrypted — only the proof is visible, not the actual Aadhaar details.
The government can view your Aadhaar ID only if you choose to undergo zk-KYC.
As for ZK-Social verifications (LinkedIn, Instagram, GitHub, X), no one — including the government — has access to those accounts or their data.
If you do not opt for zk-KYC, you can remain fully private.`,
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
    question: 'Does using zk-KYC or P2P.me raise any tax concerns?',
    answer: `No, using zk-KYC simply proves that you are a verified human — it does not directly raise any tax concerns. However, as a user, you are fully responsible for reporting and paying your own taxes.
If you follow the legal requirements, such as reporting TDS and crypto gains as per the law, there will be no issues.
Since P2P.me is a decentralized protocol, it cannot file or pay taxes on your behalf — you are required to handle your tax obligations independently.`,
    category: 'Security & Privacy',
  },
  {
    id: 'zk-kyc-vs-traditional-kyc',
    question: 'What makes zk-KYC better than traditional KYC?',
    answer: `Traditional KYC can be easily manipulated by AI-generated faces or fake documents. ZK-KYC offers a privacy-preserving, tamper-proof, and decentralised-friendly solution that confirms a user’s legitimacy without exposing personal data.`,
    category: 'Security & Privacy',
  },
  {
    id: 'zk-proof-generation-location',
    question: 'Where are the ZK proofs generated in the Reclaim Protocol?',
    answer: `The Reclaim Protocol generates zero-knowledge (ZK) proofs on the client-side, meaning within the user's device. This ensures that users maintain control over their data and cryptographic operations, as the ZK proofs are created locally without relying on third-party servers.`,
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
    question: "Accidentally sent funds to the wrong chain? Here's how to recover.",
    answer: `If you're wondering how to recover funds, here’s an example:
1. A user accidentally sent USDC to the BNB Chain instead of Base.
2. They connected their P2P.me wallet to the Relay.link dApp using WalletConnect.
3. They loaded a small amount of BNB (just a few cents) into their P2P.me wallet to cover the gas fees.
4. Then, using Relay.link, they bridged the USDC from BNB to USDC on Base — directly and safely.
✅ Funds recovered successfully.`,
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
    question: 'Can we withdraw USDC without KYC and stay hidden forever?',
    answer: `Yes, but only up to 1000 USDC by placing 10 small sell orders per day.`,
    category: 'Transactions & Orders',
  },
  {
    id: 'supported-network-usdc',
    question: 'Which network does P2P.me currently support for USDC transactions?',
    answer: `P2P.me currently supports USDC on the Base network only for both buying and selling.
Base is an Ethereum Layer 2 (L2) solution, designed for faster and cheaper transactions. You can verify activity on https://basescan.org.`,
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
    answer: `- Buy Orders: Yes, users can cancel their own buy orders at any time before they are fulfilled.
- Sell Orders: No, users cannot cancel sell orders. Only merchants have the option to cancel these.
- Scan and Pay Orders: These are automatically canceled if not fulfilled within 8 minutes.
- Buy and Sell Orders (Standard): Both buy and sell orders are automatically canceled if not completed within 1 hour.`,
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
    question: 'How to become a merchant?',
    answer: `Merchants on P2P.me provide liquidity to the protocol by buying and selling USDC from users in exchange for local currencies.

Requirements to become a merchant:
- Bank account requirement: To become a merchant on P2P.me, you need a valid bank account from one of the banks in India. Please note: it is highly recommended to use this bank account exclusively for fulfilling P2P.me orders only.
- USDC Stake requirement: You will need to stake a minimum of 500 USDC on the P2P.me protocol to provide liquidity to the network. You can also stake more than 500 USDC to increase your liquidity contribution — the larger your stake, the more orders you will receive.

If you can satisfy the above requirements you can sign up as a merchant on P2P.me at lp.p2p.me`,
    category: 'Merchants',
  },
  {
    id: 'merchant-earnings-explained',
    question: 'How much can you earn by becoming a Merchant?',
    answer: `P2P.me pays out 1% of each transaction you fulfill as a reward to your in-app wallet in USDC.
For example, if you process orders worth 10,000 USDC in a given month, you will receive 1%, which is 100 USDC, as your reward.`,
    category: 'Merchants',
  },
  {
    id: 'merchant-risks-explained',
    question: 'What Risks to be aware of as a P2P.me Merchant?',
    answer: `Account freeze risk:
There is a very low risk of your bank account being frozen if a fraudster sends money to it. However, this risk is very minimal, as the Reputation Points system on P2P.me effectively filters out fraud in approximately 1 out of every 1,000 transactions. If you actively process order requests on P2P.me, our order assignment algorithm ensures that your bank account maintains the lowest possible balance, minimising the potential for financial loss due to fraud.

Legal and regulatory risks:
As a merchant on P2P.me, you are responsible for ensuring compliance with your local laws and tax regulations. Please consult with local experts to understand your compliance requirements.`,
    category: 'Merchants',
  },
  {
    id: 'merchant-availability-hours',
    question: 'Merchants Availability?',
    answer: `Merchants are actively available from 6 am to 12 am.`,
    category: 'Merchants',
  },
  {
    id: 'is-p2pme-legal-explained',
    question: 'Is P2P.me legal?',
    answer: `P2P.me is a decentralised protocol, similar to Uniswap but designed for Fiat/Crypto swaps. Like any decentralised system, its legality depends on local regulatory interpretation, but the protocol itself is neutral, global, and permissionless.`,
    category: 'General & Legal',
  },
  {
    id: 'legal-compliance-standards',
    question: 'Does P2P.me comply with legal standards?',
    answer: `Yes. While it doesn’t custody user funds, P2P.me is built with compliance in mind. It integrates:
- ZK-KYC for private yet verifiable identity checks
- Reputation-based transaction limits
This helps prevent fraud, financial crimes, and money laundering.`,
    category: 'General & Legal',
  },
  {
    id: 'vpn-needed-explanation',
    question: 'Why do I need a VPN to access P2P.me?',
    answer: `Some jurisdictions mistakenly treat decentralised protocols like centralised businesses, leading to access restrictions. Using a VPN bypasses this, and P2P.me is engaging with regulators to promote understanding, not evasion.`,
    category: 'General & Legal',
  },
  {
    id: 'p2pme-alternatives',
    question: 'What’s the alternative to P2P.me in the current market?',
    answer: `Most people rely on unsafe options like:
- Telegram OTC channels
- WhatsApp groups
- Unregistered P2P dealers
These channels often involve no accountability, enable scams, and undermine national security.`,
    category: 'General & Legal',
  },
  {
    id: 'unregulated-p2p-problem-scope',
    question: 'How big is the problem with unregulated P2P activity?',
    answer: `According to Chainalysis 2024, countries like India, Brazil, and Indonesia rank in the Top 10 for unorganised P2P activity, with billions moving off-chain, away from any regulatory visibility.`,
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
    question: 'What’s the mission behind P2P.me?',
    answer: `P2P.me isn't here to break the system — it’s here to improve it. It’s a pragmatic solution to unsafe, untraceable peer-to-peer markets, offering users, governments, and ecosystems a better way to transact.`,
    category: 'General & Legal',
  },
  {
    id: 'messaging-guidelines-p2pme',
    question: 'P2P.me Messaging Guidelines',
    answer: `Avoid Saying:
"We have a team of merchants."
"Our merchant team handles transactions."
"Our team processes your payment."

Say Instead:
"Our protocol tracks merchant performance, which ensures faster transactions."
"Merchants join the protocol voluntarily and are ranked based on reliability and speed."
"All participants on P2P.me interact permissionlessly — there is no central team."

Avoid Saying:
“Basically at early morning it will too more time to accepted.”
“Service is 24 hours but maybe not accepting, place again.”
“It will. Will be done in 2 mins.”

Say Instead:
"P2P.me is a 24/7 protocol.
However, during early morning or late-night hours, merchant activity is lower, so your order may take slightly longer to be accepted.
If an order isn’t picked up quickly, you can cancel it and place a new one — it will likely be accepted shortly.
During the day (9 AM to 12 midnight), most orders are fulfilled in under 2 minutes due to higher merchant availability."`,
    category: 'Support & Community',
  },
  {
    id: 'support-contacts-p2pme',
    question: 'Who should I contact for support?',
    answer: `Please post general queries in the Customer Support group so they can be addressed efficiently.
For specific concerns, contact the appropriate point of contact directly:
- Order Disputes: @VibeSMasteru or @jessica_base_eth
- Technical Issues: @writ_it or @jassdotgg
- ZK-Related Queries: @aashritgarg`,
    category: 'Support & Community',
  },
];
