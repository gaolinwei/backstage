import RenderRouter from './router'
import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider } from  'antd'

import 'antd/dist/reset.css';
import 'uno.css'

import { theme } from './config/antdesign'

function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
