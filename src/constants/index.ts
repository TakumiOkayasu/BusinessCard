export const TECH_COLOR_MAP = {
	React: "blue",
	Vue: "green",
	Angular: "orange",
	"Node.js": "green",
	TypeScript: "purple",
	JavaScript: "orange",
	Python: "blue",
	AWS: "orange",
	Docker: "gray",
	Kubernetes: "blue",
	Git: "orange",
	GitHub: "gray",
	"Next.js": "gray",
	"Tailwind CSS": "blue",
	PostgreSQL: "blue",
	MongoDB: "green",
	Redis: "orange",
	GraphQL: "purple",
	"REST API": "green",
	"CI/CD": "purple",
};

type ColorClasses = {
	[key: string]: string;
};

export const TECH_COLOR_CLASSES: ColorClasses = {
	blue: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700",
	green:
		"bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700",
	purple:
		"bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-700",
	orange:
		"bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-700",
	gray: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-700",
};
