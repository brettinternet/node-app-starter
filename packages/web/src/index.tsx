import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from 'components/app'
import { reportWebVitals } from 'utils/report-web-vitals'
import * as serviceWorkerRegistration from 'utils/serviceWorkerRegistration'

const rootElement = document.getElementById('root')

if (rootElement instanceof HTMLElement) {
  const reactRoot = ReactDOM.createRoot(rootElement)
  reactRoot.render(
    <StrictMode>
      <App />
    </StrictMode>
  )

  if (process.env.NODE_ENV === 'production') {
    serviceWorkerRegistration.register()
  } else {
    serviceWorkerRegistration.unregister()
  }

  reportWebVitals()
} else {
  throw Error('Unable to find root element')
}
