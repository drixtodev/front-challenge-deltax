import Home from 'views/Home';
import Pets from 'views/Pets';

interface IRoute {
	path: string;
	component: () => JSX.Element;
}

export default [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/pets',
		component: Pets,
	},
] as IRoute[];
