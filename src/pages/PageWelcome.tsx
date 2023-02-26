import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageWelcome = () => {
	const { appTitle } = useContext(AppContext);

	return (
		<div className="pageWelcome">
			<Helmet>
				<title>{appTitle} - Welcome</title>
			</Helmet>

			<h2>This site:</h2>
			<ul>
				<li>
					is a project to learn how to set up and manage Linux hosting
					in the cloud
				</li>
				<li>
					is running at{' '}
					<a href="https://www.hetzner.com">hetzner.com</a>
				</li>
				<li>
					is running on this account: CPX11 / 40 GB / eu-central /
					Debian / 4.95&nbsp;&euro; per month
				</li>
				<li>
					serving software: nginx, certbot, pm2 (compare with{' '}
					<a href="https://tkserv.eu">tkserv.eu</a>)
				</li>
			</ul>
			<h2>Main sites:</h2>
			<ul>
				<li>
					Developer Jobs:{' '}
					<a href="https://jobs.tanguay.eu">
						https://jobs.tanguay.eu
					</a>
				</li>
				<li>
					Website Starters:{' '}
					<a href="https://starters.tanguay.eu">
						https://starters.tanguay.eu
					</a>
				</li>
				<li>
					Minimal full-stack CRUD site:{' '}
					<a href="https://getajob007.tanguay.eu">
						https://getajob007.tanguay.eu
					</a>
				</li>
				<li>
					My conversation with ChatGPT on ethics and responsibility:{' '}
					<a href="https://tanguay.eu/chatgptconvo">
						https://tanguay.eu/chatgptconvo
					</a>
				</li>
				<li>
					My conversation with ChatGPT on gender identity and social
					criticism:{' '}
					<a href="https://tanguay.eu/chatgptconvo2">
						https://tanguay.eu/chatgptconvo2
					</a>
				</li>
			</ul>
			<h2>Test sites:</h2>
			<ul>
				<li>
					React test site:{' '}
					<a href="https://testreact.tanguay.eu">
						https://testreact.tanguay.eu
					</a>
				</li>
				<li>
					Node/Express test API:{' '}
					<a href="https://testapi.tanguay.eu">
						https://testapi.tanguay.eu
					</a>
				</li>
				<li>
					MERN Backend/Frontend/TypeScript/NodeMailer app with
					registration:{' '}
					<a href="https://et003testfront.tanguay.eu">
						https://et003testfront.tanguay.eu
					</a>
				</li>
				<li>
					Simple Angular Application:{' '}
					<a href="https://testang.tanguay.eu">
						https://testang.tanguay.eu
					</a>{' '}
					(et003-angular-test)
				</li>
				<li>
					Fullstack MERN app where session/cookie login works
					(sameSite: lax, secure: false):{' '}
					<a href="https://et-mern-crud-site.tanguay.eu">
						https://et-mern-crud-site.tanguay.eu
					</a>
				</li>
			</ul>
			<h2>Other links:</h2>
			<ul>
				<li>
					<a href="https://edwardtanguay.vercel.app/howtos">
						my howtos
					</a>
				</li>
			</ul>
			<div className="version">version 0.5.1</div>
		</div>
	);
};
