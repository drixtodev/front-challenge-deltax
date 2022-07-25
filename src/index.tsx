import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from 'components/Page';
import routes from 'routes';
import { AppProvider } from 'context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function App(): JSX.Element {
	return (
		<Routes>
			{routes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={
						<Page>
							<route.component />
						</Page>
					}
				/>
			))}
		</Routes>
	);
}

root.render(
	<React.StrictMode>
		<AppProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	</React.StrictMode>
);
