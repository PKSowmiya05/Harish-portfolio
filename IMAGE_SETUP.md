# Image Setup Instructions

## Adding Harish's Profile Image

To add the profile image to the portfolio:

1. **Save the image** that was provided as `harish-profile.jpg`

2. **Place the image** in the following location:
   ```
   public/images/harish-profile.jpg
   ```

3. **Image Requirements:**
   - **Format:** JPG, PNG, or WebP
   - **Size:** Minimum 400x400 pixels (square aspect ratio works best)
   - **File size:** Under 2MB for optimal loading
   - **Name:** Must be exactly `harish-profile.jpg`

4. **The image will automatically appear** in:
   - Home page hero section (circular profile)
   - About page header (circular avatar)

## Current Implementation

The code has been updated to use the actual image instead of the "HS" placeholder:

- **Home Page:** Large profile image with hover effects
- **About Page:** Smaller avatar image with animations
- **Responsive:** Images scale properly on all device sizes
- **Optimized:** Uses object-fit: cover for perfect circular cropping

## Styling Features

- **Circular crop:** Image is automatically cropped to circular shape
- **Hover effects:** Slight zoom on hover
- **Animations:** Subtle pulse animation
- **Border:** Semi-transparent border with backdrop blur
- **Shadow:** Professional drop shadow effect

Once you place the image file in `public/images/harish-profile.jpg`, it will immediately replace the placeholder and show Harish's actual photo in both locations.
