import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const category = (label: string, items: string[]) => ({ type: 'category' as const, label, collapsed: false, items })

const sidebars: SidebarsConfig = {
  manual: [
    category("Getting started", ["getting-started/overview", "getting-started/signing-in"]),
    category("Customers and users", ["customers/organizations", "customers/users"]),
    category("Fleet", ["fleet/firewalls", "fleet/licences", "fleet/alerts"]),
    category("Reports and brand", ["reports/protection-reports", "reports/brand", "reports/account"]),
    category("Support", ["support/support-page"]),
    category("Help", ["help/troubleshooting"])
  ]
}

export default sidebars
