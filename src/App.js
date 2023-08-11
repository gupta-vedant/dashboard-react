

import { Routes, Route } from "react-router-dom";

import Topbar from "./global/topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/material";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/apple";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";


function App() {
  const [theme, colorMode] = useMode();
  

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    
    <div className="App">
    <Sidebar/>
    <main className="content">
    <Topbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/Invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Line" element={<Line />} />
      <Route path="/Pie" element={<Pie />} />
      <Route path="/Bar" element={<Bar />} />
      <Route path="/geography" element={<Geography />} />
      

    </Routes>
      
    </main> 
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
