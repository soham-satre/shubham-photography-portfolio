# 📸 How to Add Maternity Images

## 📁 **Step 1: Prepare Your Image Folder**

Make sure you have the maternity images folder:
```
d:\Project\Portfo\images\maternity\
```

## 🖼️ **Step 2: Add Your 9 Maternity Photos**

Place your maternity photos in the `images/maternity/` folder with these exact filenames:

1. **expecting-joy.jpg** - A joyful expecting mother photo
2. **bump-beauty.jpg** - Beautiful bump photography
3. **golden-hour.jpg** - Golden hour maternity session
4. **tender-moments.jpg** - Tender, intimate moments
5. **studio-session.jpg** - Professional studio maternity photo
6. **nature-maternity.jpg** - Outdoor/nature maternity session
7. **silhouettes.jpg** - Artistic silhouette photography
8. **artistic-poses.jpg** - Creative, artistic maternity poses
9. **lifestyle-maternity.jpg** - Casual, lifestyle maternity photos

## 📏 **Image Requirements:**

- **Size**: 1200x800px minimum (3:2 ratio recommended)
- **Format**: JPG or WebP
- **File Size**: Under 500KB each for fast loading
- **Quality**: High resolution, well-lit, professional quality

## 🔄 **Step 3: How to Replace Images**

### **Method 1: Use Exact Filenames (Recommended)**
Simply save your photos with the exact names listed above, and they'll automatically appear on the website.

### **Method 2: Custom Filenames**
If you want to use different filenames, update the HTML:

1. Open `maternity.html`
2. Find the image you want to change, for example:
   ```html
   <img src="images/maternity/expecting-joy.jpg" alt="Expecting Joy - Maternity Photography" class="gallery-image">
   ```
3. Change `expecting-joy.jpg` to your filename:
   ```html
   <img src="images/maternity/my-custom-name.jpg" alt="Expecting Joy - Maternity Photography" class="gallery-image">
   ```

## 🎨 **Image Optimization Tips:**

1. **Compress Images**: Use tools like TinyPNG or ImageOptim to reduce file size
2. **Consistent Style**: Use similar lighting and editing style across all photos
3. **Aspect Ratio**: Keep consistent aspect ratios for better grid layout
4. **Watermarks**: Consider adding subtle watermarks to protect your work

## 📱 **Responsive Behavior:**

Your images will automatically:
- ✅ Resize for different screen sizes
- ✅ Maintain aspect ratio
- ✅ Show overlay text on hover
- ✅ Display in a responsive grid (3 columns on desktop, 1 on mobile)

## 🔍 **Testing Your Images:**

1. Add your images to the `images/maternity/` folder
2. Open `maternity.html` in your browser
3. Check that all images load correctly
4. Test on different screen sizes
5. Verify hover effects work

## 🚀 **For Deployment:**

When you upload to Vercel or any hosting platform:
1. Include the entire `images` folder
2. Keep the folder structure intact
3. All images will be deployed automatically

## 📄 **Current Image Structure:**

```
d:\Project\Portfo\
├── maternity.html
├── images/
│   └── maternity/
│       ├── expecting-joy.jpg
│       ├── bump-beauty.jpg
│       ├── golden-hour.jpg
│       ├── tender-moments.jpg
│       ├── studio-session.jpg
│       ├── nature-maternity.jpg
│       ├── silhouettes.jpg
│       ├── artistic-poses.jpg
│       └── lifestyle-maternity.jpg
```

Your maternity gallery is now ready to display beautiful real images! 📸✨
