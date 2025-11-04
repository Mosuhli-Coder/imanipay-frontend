# Update Dashboard Pages Styling to Match Landing Page

## Tasks
- [x] Update dashboard layout background to white instead of green
- [x] Update sidebar colors to match landing page theme (teal accents)
- [x] Update header colors to match landing page theme
- [x] Update dashboard page background to white
- [x] Update deposits page background to white
- [x] Update withdraw page background to white
- [x] Update send money page background to white
- [x] Update profile settings page background to white
- [x] Update activity/transactions pages background to white
- [x] Update global CSS to use white backgrounds for dashboard pages

## Information Gathered
- Landing page uses white background with teal accents (#00E7B3)
- Current dashboard uses green background (#1a4d1a) from globals.css
- Sidebar and header need color updates to match teal theme
- All dashboard pages currently inherit green background from body
- Need to override background colors to white for consistency

## Plan
1. Update globals.css to use white background for dashboard pages
2. Update sidebar component colors to use teal theme
3. Update header component colors to use teal theme
4. Update individual page backgrounds to white
5. Ensure all dashboard pages have consistent white background with teal accents

## Dependent Files
- app/globals.css
- components/dashboard/general/Sidebar.tsx
- components/dashboard/general/AppHeader.tsx
- app/dashboard/layout.tsx
- app/dashboard/page.tsx
- app/dashboard/banking/deposits/page.tsx
- app/dashboard/funds/withdraw/page.tsx
- app/dashboard/transactions/send/page.tsx
- app/dashboard/settings/profile/page.tsx
- app/dashboard/activity/transactions/page.tsx (if exists)

## Followup Steps
- [x] Test all dashboard pages for visual consistency
- [x] Verify sidebar and header styling matches landing page theme
- [x] Ensure form functionality remains intact
- [x] Fix card visibility issues with black backgrounds
- [x] Add shadows to sidebar and header for better visibility

---

# Fix Asset Fetching Issue in Production

## Tasks
- [x] Identify root cause: stale localStorage dashboardData from different environment
- [x] Update fetchAssets function to check data freshness and refresh if needed
- [x] Add retry logic for 404 "Wallet not found" errors
- [x] Store timestamp with dashboardData to track freshness

## Information Gathered
- Asset fetching fails in production with 404 "Wallet not found"
- Works in Postman, indicating backend is functional
- walletId retrieved from localStorage "dashboardData" set on dashboard page
- localStorage may contain data from localhost when deployed to production
- NEXT_PUBLIC_SERVER_URL differs between environments

## Plan
- Modify fetchAssets in app/dashboard/transactions/send/page.tsx to:
  - Check if dashboardData is recent (< 1 hour old)
  - Fetch fresh dashboard data if walletId is missing or data is stale
  - Handle 404 errors by clearing stale data and retrying
  - Store timestamp with dashboardData for freshness tracking

## Dependent Files
- app/dashboard/transactions/send/page.tsx

## Followup Steps
- [ ] Test in production environment to verify assets load correctly
- [ ] Monitor for any authentication or CORS issues
- [ ] Ensure NEXT_PUBLIC_SERVER_URL is correctly set in production
