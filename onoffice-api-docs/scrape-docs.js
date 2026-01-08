const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Documentation structure with all URLs
const DOC_STRUCTURE = {
	introduction: {
		name: 'Introduction & Getting Started',
		urls: ['https://apidoc.onoffice.de/', 'https://apidoc.onoffice.de/erste-schritte/'],
	},
	general: {
		name: 'API Structure & General Information',
		urls: [
			'https://apidoc.onoffice.de/terminologie/',
			'https://apidoc.onoffice.de/api-benutzer-anlegen/',
			'https://apidoc.onoffice.de/access-token-generieren/',
			'https://apidoc.onoffice.de/allgemeine-hinweise/',
			'https://apidoc.onoffice.de/fehler/',
		],
	},
	request: {
		name: 'API Request Structure',
		urls: [
			'https://apidoc.onoffice.de/onoffice-api-request/',
			'https://apidoc.onoffice.de/onoffice-api-request/aufbau/',
			'https://apidoc.onoffice.de/onoffice-api-request/request-elemente/',
			'https://apidoc.onoffice.de/onoffice-api-request/request-elemente/wurzelelement/',
			'https://apidoc.onoffice.de/onoffice-api-request/request-elemente/request/',
			'https://apidoc.onoffice.de/onoffice-api-request/request-elemente/actions/',
			'https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/',
		],
	},
	response: {
		name: 'API Response Structure',
		urls: [
			'https://apidoc.onoffice.de/onoffice-api-response/',
			'https://apidoc.onoffice.de/onoffice-api-response/aufbau/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/wurzelelement/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/status/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/response/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/results/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/result/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/data/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/records/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/record/',
			'https://apidoc.onoffice.de/onoffice-api-response/response-elemente/elements/',
		],
	},
	estates: {
		name: 'Estates Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/objekte/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/objekte/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/objekte/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/generierung-eines-pdf-exposes/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/objektdateien/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/auf-homepage-veroeffentlichte-objektbilder/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/files/',
			'https://apidoc.onoffice.de/actions/datensatz-loeschen/files/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/filter/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/working-list/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/selling-price-offer/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/selling-price-offer/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/estate-tracking-details/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/objekt-tracking-konto-erstellen/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/estate-categories/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/suche-nach-objekten-quicksearch-nach-objektadresse-eigentuemer-und-ext-objektnummer/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/mieter-kaeuferfinder-immomatching/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-statistics-widgets/',
		],
	},
	addresses: {
		name: 'Addresses Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/adressen/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/adressen/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/addresses/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/suche/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/address-files/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/download-address-files/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/adressvervollstaendigungsfelder/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/adressvervollstaendigung-versenden/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/newsletter-registration/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/single-and-multiselect-values/',
		],
	},
	'search-criteria': {
		name: 'Search Criteria Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/search-criteria/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/suchkriterien/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/suchkriterien/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/suchkriterien/',
			'https://apidoc.onoffice.de/actions/datensatz-loeschen/suchkriterien/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/suchkriterienfelder/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/suche-nach-passenden-suchkriterien/',
		],
	},
	'agents-log': {
		name: 'Agents Log / Activities Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/agents-log/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/maklerbuch/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/maklerbuch-aktivitaeten/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/modify-agents-log-activities/',
		],
	},
	appointments: {
		name: 'Appointments Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointments-list/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/kalender-termin/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/termine/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/appointments/',
			'https://apidoc.onoffice.de/actions/datensatz-loeschen/appointments/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/terminbestaetigung-versenden/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/calendar-resources/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointment-files/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointment-conflicts/',
		],
	},
	tasks: {
		name: 'Tasks Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/tasks/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/tasks/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/tasks/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/tasks/',
		],
	},
	relations: {
		name: 'Relations Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/',
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/relations-diagram/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/relationen/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/relationen/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/relations/',
			'https://apidoc.onoffice.de/actions/datensatz-loeschen/relations/',
		],
	},
	files: {
		name: 'Files and Templates Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/files/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/dateiupload/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/default-attachments/',
		],
	},
	emails: {
		name: 'Emails Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/emails/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/email-versenden/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/emailverknuepfungen/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/email-info/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/emailverknuepfungen-erstellen/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-mail-signature/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-email-template-folders/',
		],
	},
	settings: {
		name: 'Settings Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/read-basic-settings/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/read-imprint/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-groups/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/user/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-users/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/user-photo/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/read-user-rights/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/feldkonfiguration/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-multiselect-configuration/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/aktionsart-und-typ/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/regionen/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/regionen-live-suche/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/do-access-control-data-record-rights-stamp/',
		],
	},
	miscellaneous: {
		name: 'Miscellaneous Module',
		urls: [
			'https://apidoc.onoffice.de/api-calls-sorted-by-module/miscellaneous/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/records-last-seen/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-macro-resolve/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/number-of-log-entries/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-survey/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/timetracking/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/get-link/',
		],
	},
	marketplace: {
		name: 'Marketplace Module',
		urls: [
			'https://apidoc.onoffice.de/marketplace/',
			'https://apidoc.onoffice.de/marketplace/unlock-marketplace-provider/',
			'https://apidoc.onoffice.de/marketplace/get-marketplace-invoice-recipient/',
			'https://apidoc.onoffice.de/marketplace/cancel-subscription/',
			'https://apidoc.onoffice.de/marketplace/generate-subsequent-payment-link/',
			'https://apidoc.onoffice.de/marketplace/refund-transaction/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/execute-webhooks/',
		],
	},
	'special-topics': {
		name: 'Special Topics',
		urls: [
			'https://apidoc.onoffice.de/various-special-topics/',
			'https://apidoc.onoffice.de/multi-object-module-real-estate-investments/',
			'https://apidoc.onoffice.de/multilingual-estates/',
			'https://apidoc.onoffice.de/identification-of-data-sets-via-uuid/',
		],
	},
	actions: {
		name: 'Actions Overview',
		urls: [
			'https://apidoc.onoffice.de/actions/',
			'https://apidoc.onoffice.de/actions/datensatz-lesen/',
			'https://apidoc.onoffice.de/actions/datensatz-anlegen/',
			'https://apidoc.onoffice.de/actions/datensatz-bearbeiten/',
			'https://apidoc.onoffice.de/actions/datensatz-loeschen/',
			'https://apidoc.onoffice.de/actions/informationen-abfragen/',
			'https://apidoc.onoffice.de/actions/aktionen-ausfuehren/',
		],
	},
};

const OUTPUT_DIR = path.join(__dirname, 'onoffice-api-docs');

// Simple HTML to Markdown conversion
function htmlToMarkdown(html) {
	let markdown = html;

	// Remove script and style tags
	markdown = markdown.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
	markdown = markdown.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

	// Headers
	markdown = markdown.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n# $1\n');
	markdown = markdown.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n');
	markdown = markdown.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n');
	markdown = markdown.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n#### $1\n');
	markdown = markdown.replace(/<h5[^>]*>(.*?)<\/h5>/gi, '\n##### $1\n');
	markdown = markdown.replace(/<h6[^>]*>(.*?)<\/h6>/gi, '\n###### $1\n');

	// Bold and Italic
	markdown = markdown.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
	markdown = markdown.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
	markdown = markdown.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
	markdown = markdown.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');

	// Code blocks
	markdown = markdown.replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gis, '\n```\n$1\n```\n');
	markdown = markdown.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');
	markdown = markdown.replace(/<pre[^>]*>(.*?)<\/pre>/gis, '\n```\n$1\n```\n');

	// Lists
	markdown = markdown.replace(/<ul[^>]*>/gi, '\n');
	markdown = markdown.replace(/<\/ul>/gi, '\n');
	markdown = markdown.replace(/<ol[^>]*>/gi, '\n');
	markdown = markdown.replace(/<\/ol>/gi, '\n');
	markdown = markdown.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');

	// Links
	markdown = markdown.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

	// Paragraphs and breaks
	markdown = markdown.replace(/<p[^>]*>/gi, '\n');
	markdown = markdown.replace(/<\/p>/gi, '\n');
	markdown = markdown.replace(/<br\s*\/?>/gi, '\n');
	markdown = markdown.replace(/<hr\s*\/?>/gi, '\n---\n');

	// Tables
	markdown = markdown.replace(/<table[^>]*>/gi, '\n');
	markdown = markdown.replace(/<\/table>/gi, '\n');
	markdown = markdown.replace(/<thead[^>]*>/gi, '');
	markdown = markdown.replace(/<\/thead>/gi, '');
	markdown = markdown.replace(/<tbody[^>]*>/gi, '');
	markdown = markdown.replace(/<\/tbody>/gi, '');
	markdown = markdown.replace(/<tr[^>]*>/gi, '');
	markdown = markdown.replace(/<\/tr>/gi, '\n');
	markdown = markdown.replace(/<th[^>]*>(.*?)<\/th>/gi, '| $1 ');
	markdown = markdown.replace(/<td[^>]*>(.*?)<\/td>/gi, '| $1 ');

	// Divs and spans
	markdown = markdown.replace(/<div[^>]*>/gi, '\n');
	markdown = markdown.replace(/<\/div>/gi, '\n');
	markdown = markdown.replace(/<span[^>]*>/gi, '');
	markdown = markdown.replace(/<\/span>/gi, '');

	// Remove remaining HTML tags
	markdown = markdown.replace(/<[^>]+>/g, '');

	// Decode HTML entities
	markdown = markdown
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&auml;/g, 'ä')
		.replace(/&ouml;/g, 'ö')
		.replace(/&uuml;/g, 'ü')
		.replace(/&Auml;/g, 'Ä')
		.replace(/&Ouml;/g, 'Ö')
		.replace(/&Uuml;/g, 'Ü')
		.replace(/&szlig;/g, 'ß');

	// Clean up multiple newlines
	markdown = markdown.replace(/\n{3,}/g, '\n\n');

	return markdown.trim();
}

// Fetch URL content
function fetchUrl(url) {
	return new Promise((resolve, reject) => {
		const urlObj = new URL(url);
		const client = urlObj.protocol === 'https:' ? https : http;

		client
			.get(url, (res) => {
				if (res.statusCode === 301 || res.statusCode === 302) {
					fetchUrl(res.headers.location).then(resolve).catch(reject);
					return;
				}

				if (res.statusCode !== 200) {
					reject(new Error(`HTTP ${res.statusCode} for ${url}`));
					return;
				}

				let data = '';
				res.on('data', (chunk) => (data += chunk));
				res.on('end', () => resolve(data));
			})
			.on('error', reject);
	});
}

// Extract main content from HTML
function extractMainContent(html) {
	// Try to find the main content area
	const contentPatterns = [
		/<main[^>]*>(.*?)<\/main>/is,
		/<article[^>]*>(.*?)<\/article>/is,
		/<div[^>]*class="[^"]*content[^"]*"[^>]*>(.*?)<\/div>/is,
		/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>(.*?)<\/div>/is,
		/<body[^>]*>(.*?)<\/body>/is,
	];

	for (const pattern of contentPatterns) {
		const match = html.match(pattern);
		if (match) {
			return match[1];
		}
	}

	return html;
}

// Generate filename from URL
function urlToFilename(url) {
	const urlObj = new URL(url);
	let pathname = urlObj.pathname;

	// Remove leading/trailing slashes
	pathname = pathname.replace(/^\/|\/$/g, '');

	// Replace slashes with dashes
	pathname = pathname.replace(/\//g, '-');

	// If empty, use 'index'
	if (!pathname) {
		pathname = 'index';
	}

	return `${pathname}.md`;
}

// Scrape a single URL
async function scrapePage(url) {
	console.log(`Scraping: ${url}`);
	try {
		const html = await fetchUrl(url);
		const mainContent = extractMainContent(html);
		const markdown = htmlToMarkdown(mainContent);

		// Add metadata header
		const title = url.split('/').filter(Boolean).pop() || 'Home';
		const header = `---
source: ${url}
title: ${title}
scraped: ${new Date().toISOString()}
---

`;

		return header + markdown;
	} catch (error) {
		console.error(`Error scraping ${url}:`, error.message);
		return `# Error\n\nFailed to scrape ${url}\n\nError: ${error.message}`;
	}
}

// Sleep helper
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Main scraping function
async function scrapeAllDocs() {
	// Create output directory
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	console.log(`Output directory: ${OUTPUT_DIR}\n`);

	const index = {
		title: 'onOffice API Documentation',
		scraped: new Date().toISOString(),
		sections: [],
	};

	// Scrape each section
	for (const [key, section] of Object.entries(DOC_STRUCTURE)) {
		console.log(`\n=== Processing: ${section.name} ===`);

		const sectionDir = path.join(OUTPUT_DIR, key);
		if (!fs.existsSync(sectionDir)) {
			fs.mkdirSync(sectionDir, { recursive: true });
		}

		const sectionFiles = [];

		for (const url of section.urls) {
			const markdown = await scrapePage(url);
			const filename = urlToFilename(url);
			const filepath = path.join(sectionDir, filename);

			fs.writeFileSync(filepath, markdown, 'utf8');
			console.log(`  ✓ Saved: ${key}/${filename}`);

			sectionFiles.push({
				filename,
				url,
				path: `${key}/${filename}`,
			});

			// Be nice to the server
			await sleep(500);
		}

		index.sections.push({
			key,
			name: section.name,
			files: sectionFiles,
		});
	}

	// Generate index file
	let indexMarkdown = `# onOffice API Documentation

Scraped on: ${new Date().toISOString()}

This documentation has been scraped from [https://apidoc.onoffice.de/](https://apidoc.onoffice.de/) for offline reference and LLM consumption.

## Table of Contents

`;

	for (const section of index.sections) {
		indexMarkdown += `\n### ${section.name}\n\n`;
		for (const file of section.files) {
			const title = file.filename.replace('.md', '').replace(/-/g, ' ');
			indexMarkdown += `- [${title}](./${file.path})\n`;
		}
	}

	indexMarkdown += `\n## API Endpoints

- Stable: \`https://api.onoffice.de/api/stable/api.php\`
- Latest: \`https://api.onoffice.de/api/latest/api.php\`

## Structure

The documentation is organized into the following modules:

`;

	for (const section of index.sections) {
		indexMarkdown += `- **${section.name}**: ${section.files.length} pages\n`;
	}

	const indexPath = path.join(OUTPUT_DIR, 'INDEX.md');
	fs.writeFileSync(indexPath, indexMarkdown, 'utf8');
	console.log(`\n✓ Index file created: INDEX.md`);

	// Also save as JSON for programmatic access
	const indexJsonPath = path.join(OUTPUT_DIR, 'index.json');
	fs.writeFileSync(indexJsonPath, JSON.stringify(index, null, 2), 'utf8');
	console.log(`✓ JSON index created: index.json`);

	console.log(
		`\n✅ Scraping complete! ${index.sections.reduce((sum, s) => sum + s.files.length, 0)} pages scraped.`,
	);
	console.log(`📁 Documentation saved to: ${OUTPUT_DIR}`);
}

// Run the scraper
if (require.main === module) {
	scrapeAllDocs().catch(console.error);
}

module.exports = { scrapeAllDocs, scrapePage };
