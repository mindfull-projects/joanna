# Joanna Website

_A personal website built with Next.js, Tailwind CSS, and DaisyUI._

### Prerequisites

- AWS CLI (if deploying using SST with AWS SSO)

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd joanna-website
npm install
```

### Development

Start the development server using Next.js:

```bash
npm run dev
```

### Deployment

Log in to AWS SSO (if you haven't already):

```bash
npm run aws:login
```

### Deploy your project using SST:

```bash
npm run deploy
```

### To remove the deployed stack:

```bash
npm run destroy
```
