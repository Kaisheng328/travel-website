# Team Development Guide

## Step 1: Clone the Repository
Before making any changes, clone the repository to your local machine.
```bash
git clone https://github.com/Kaisheng328/travel-website.git
cd repository
```
## Step 2: Check Your Current Working Branch
Perform command below to check which branch you are working with.
```bash
git branch
```
if it show `main` branch. Remember to follow Step 3 for creating own branch.
if it show multiple branch like  (`main`, `kaisheng-plan`, `kaisheng-blog`), perform command below to switch to branch u want to work with. Never Work at MAIN BRANCH !!!
```bash
git branch kaisheng-plan
```

## Step 3: Create Your Own Branch
Never work directly on the `main` branch. Instead, create a new branch for your changes.
```bash
git checkout -b your-branch-name
```
Use a meaningful branch name that describes your work (e.g., `feature-login-page` or `bugfix-dashboard`).

## Step 4: Start Coding
Make your changes in the codebase. After modifying files, stage and commit them.
```bash
git add .
git commit -m "Description of changes"
```

## Step 5: Push to Your Own Branch
Push your branch to the remote repository (not `main`).
```bash
git push origin your-branch-name
```

## Step 6: Create a Pull Request (PR)
1. Go to the GitHub repository: `https://github.com/Kaisheng328/travel-website`
2. Navigate to the `Pull Requests` tab.
3. Click `New Pull Request`.
4. Select your branch as the source and `main` as the target.
5. Add a title and description for your changes.
6. Click `Create Pull Request`.

## Step 6: Wait for Review & Merging
The repository owner will review your pull request. If needed, they may request changes before merging. Once approved, your changes will be merged into `main`.


