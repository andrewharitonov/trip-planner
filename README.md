# Plan your trip app

### General information
This app was designed using React and TypeScript.  
I left some comments in the code to explain my choice or how we can improve different things.  
**My tips for improving the application (scalability/accessibility/optimizations) can be found below**

### Components tree
index (entry point)
* api (helper functions that fetch the data)
  * dates
  * locations
  * products
* components (generic components that used cross the app)
  * card
  * content
  * datePicker
    * dateSeparator
  * footer
  * formField
  * header
  * horizontalSeparator
  * lazyImage
  * noResultsSection
  * select
  * squareButton
* constants (generic constants of the app)
* helpers (generic helper functions)
  * debounce
* hooks (generic hooks)
* views (specific components)
  * tripPlanner (trip planner page)
    * searchForm
      * cityFilter
      * countryFilter
      * dateFilter
    * searchResults
      * productsList
        * productCard (can be moved to generic components if it will be reused in future)
          * productInfo

### Tests
I also added some unit tests (not for all components) to show you how I usually write them for different cases:
* api/products/products.test.ts
* components/datePicker.test.ts
* components/lazyImage.test.ts
* helpers/debounce/debounce.test.ts
* views/tripPlanner/searchForm/searchForm.test.tsx

### Improvement suggestions

#### Optimizations
* Reload ProductsList images with proper width and height when viewport changes
* Implement caching for API calls (HTTP caching would be also good)
* Add virtualization/infinite scroll/pagination for ProductsList
* Add polyfills of modern browser API if support for older browsers is needed
* Use dynamic import (React.Lazy and Suspense) to distribute bundles loading
* User React.memo to avoid rerenders if needed

#### Scalability
* Add library for advanced XHR control (such as Axios). (To simplify, I just used Fetch)
* Keep writing components using TypeScript
* Extract generic components to separate package if application grows. Use monorepository (lerna/pnpm) if needed.
* Use some state management tools to control global storage when application grows (for now context is more than enough)
* Write more unit tests and add E2E tests to define problems as early as possible
* Use routing if there is more than one page

#### UX / Accessibility
* Add animations
* Implement custom "Select" to achieve good look and feel
* Add arrow keys navigation for DatePicker and ProductsList
* Add internationalization tools if needed
* Add aria attributes if needed

#### Errors handling / Logging
* Add React ErrorBoundary to collect information about runtime errors and send it to logging tool
* Send errors to logging tool when API requests fail
