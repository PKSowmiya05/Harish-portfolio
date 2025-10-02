# Resume Setup Instructions

## Adding Harish's Resume PDF

To enable the "Download CV" functionality:

1. **Save your resume PDF** as `Harish_S_Resume.pdf`

2. **Place the PDF** in the following location:
   ```
   public/resume/Harish_S_Resume.pdf
   ```

3. **PDF Requirements:**
   - **Format:** Must be PDF
   - **File name:** Must be exactly `Harish_S_Resume.pdf`
   - **File size:** Under 5MB recommended
   - **Content:** Your latest resume/CV

## How It Works

The "Download CV" button has been configured to:

- **Direct Download:** Clicking the button automatically downloads the PDF
- **Custom Filename:** Downloaded file will be named `Harish_S_Resume.pdf`
- **Smooth Experience:** No page redirect or external links
- **Works Offline:** Once loaded, works without internet

## Button Functionality Added

### "View My Work" Button:
- **Action:** Navigates to Projects page
- **Animation:** Smooth scroll to top
- **State Management:** Uses existing navigation system

### "Download CV" Button:
- **Action:** Downloads resume PDF
- **File Location:** `/resume/Harish_S_Resume.pdf`
- **Download Name:** `Harish_S_Resume.pdf`
- **User Experience:** Instant download without leaving page

## File Structure
```
public/
├── images/
│   └── harish-profile.jpg
└── resume/
    └── Harish_S_Resume.pdf  ← Place your PDF here
```

Once you place the PDF file in the correct location, the "Download CV" button will work immediately!
