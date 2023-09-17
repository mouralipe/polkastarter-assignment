<h1 align="center">
  Highest Rated Games of 2023
</h1>

## Useful Links

* [Application on Vercel](https://polkastarter-assignment.vercel.app/)


<hr />

<br />

## How to Run the Project?

1. In the terminal, clone the project:

```
git clone https://github.com/mouralipe/polkastarter-assignment.git
```

2. Navigate to the project folder:

```
cd polkastarter-assignment
```

3. Install the dependencies:

```
npm install
```

4. Then, place your RAWG API key in the `.env` file and save it:

```
NEXT_PUBLIC_RAWG_API_KEY="YOUR_KEY_HERE"
```

5. Next, run:

```
npm run dev
```
6. The project will run at the URL: `http://localhost:3000/`

<br /><br />

*Note: You can view the component documentation by running `npm run storybook`*

<br /><br />

## **Frontend Developer Assignment**

### **Objective**
To create a simple yet appealing web application utilizing Next.js and TypeScript, by leveraging the RAWG Video Games Database API to display popular games and detailed information about them. Your task is to demonstrate a proficient skill set in building a functional, user-friendly, and visually attractive application.

### **Duration**
The task should be completed in a span of **up to 16 paid hours**.

### **Features**

#### **1. Homepage**

**- Initial View:**
   - Display cards with details of the highest-rated games of 2023.
   - Ensure each card contains:
     - Game title
     - Cover image
     - Available platforms
     - Genres

**- Search Functionality:**
   - Incorporate a search bar for game searches by name.
   - Showcase visual indicators of the search state.

**- Bonus:**
   - Implement pagination.
   - Introduce a dropdown menu to select the number of items displayed per page.

#### **2. Single Game Page**

**- Detail View:**
   - Clicking on a game card should open a detailed view with:
     - Description
     - Release date
     - Metacritic rating
     - Screenshot gallery

**- Bonus:**
   - Display game DLCs in a card format with links to dedicated pages.

#### **3. Component Development with Storybook**

**- Documentation:**
   - Develop and document one or two reusable components using Storybook (like a 'Game Card' for the homepage, and a 'Detail Box' for the detailed page).
   - Ensure accessibility standards are met for the components.

### **Instructions and Guidelines**

- Register to get an API key on the [RAWG API docs page](https://rawg.io/apidocs) and go through the [API documentation](https://api.rawg.io/docs/).
- Bootstrap your project using `create-next-app` with TypeScript enabled.
- Adhere to typing standards, especially for API interactions, and set up the default ESLint configuration.
- Choose between `/pages` or `/app` directories for your project setup.
- Leverage your favored UI libraries/frameworks to build a clean and aesthetically balanced application.
- Enhance user experience by proficiently handling errors and potential invalid states.

### **Submission**

- Fulfill the essential requisites and strive to incorporate the bonus features to highlight your dedication and capability to go an extra mile.
- Maintain a clean, well-commented, and orderly code structure.
- Adhere to the submission deadline.

<br /><br />