# 📸 Image Management Guide for Your Photography Portfolio

## 📁 **Folder Structure**

```
d:\Project\Portfo\
├── images/
│   ├── hero/
│   │   └── main-hero.jpg           (Main homepage image - 400x500px recommended)
│   ├── weddings/
│   │   ├── ceremony-1.jpg          (Wedding ceremony photos)
│   │   ├── first-dance.jpg
│   │   ├── bride-groom-1.jpg
│   │   ├── wedding-party.jpg
│   │   ├── reception-1.jpg
│   │   ├── romantic-1.jpg
│   │   ├── family-1.jpg
│   │   ├── details-1.jpg
│   │   ├── candid-1.jpg
│   │   ├── sunset-1.jpg
│   │   ├── venue-1.jpg
│   │   └── getting-ready.jpg
│   ├── portraits/
│   │   ├── professional-1.jpg      (Professional headshots)
│   │   ├── family-1.jpg
│   │   ├── creative-1.jpg
│   │   ├── studio-1.jpg
│   │   ├── outdoor-1.jpg
│   │   ├── couple-1.jpg
│   │   ├── maternity-1.jpg
│   │   ├── senior-1.jpg
│   │   ├── children-1.jpg
│   │   ├── lifestyle-1.jpg
│   │   ├── fashion-1.jpg
│   │   └── bw-1.jpg
│   └── maternity/
│       ├── expecting-1.jpg         (Maternity photos)
│       ├── bump-1.jpg
│       ├── golden-hour-1.jpg
│       ├── tender-1.jpg
│       ├── studio-1.jpg
│       ├── nature-1.jpg
│       ├── partner-1.jpg
│       ├── silhouette-1.jpg
│       ├── family-anticipation-1.jpg
│       ├─ artistic-1.jpg
│       ├── lifestyle-1.jpg
│       └── beginnings-1.jpg
```

## 🖼️ **Image Requirements**

### **Recommended Sizes:**
- **Hero Image**: 400x500px (3:4 ratio)
- **Gallery Images**: 1200x800px minimum (3:2 ratio)
- **File Format**: JPG or WebP
- **File Size**: Under 500KB each for fast loading

### **Image Optimization Tips:**
1. **Compress images** before uploading (use tools like TinyPNG)
2. **Use descriptive filenames** (e.g., `sunset-wedding-portrait.jpg`)
3. **Maintain consistent aspect ratios** for better grid layout
4. **Keep file sizes small** for faster loading

## 🔄 **How to Add Your Images**

### **Step 1: Prepare Your Photos**
1. Select your best photographs
2. Resize them to recommended dimensions
3. Compress them to reduce file size
4. Rename them according to the structure above

### **Step 2: Replace Placeholder Images**
1. Copy your images to the appropriate folders
2. Make sure filenames match exactly what's in the HTML files
3. Test the website locally to ensure images load

### **Step 3: Add More Images (Optional)**
To add more images to any gallery:

1. **Add the image file** to the appropriate folder
2. **Update the HTML** by copying an existing gallery item and changing:
   - `src="images/weddings/your-new-image.jpg"`
   - `alt="Description of your image"`
   - `<h3>Your Image Title</h3>`

Example:
```html
<div class="gallery-item" data-title="New Wedding Photo">
    <img src="images/weddings/new-wedding-photo.jpg" alt="Beautiful Wedding Moment" class="gallery-image">
    <div class="gallery-overlay">
        <h3>Beautiful Wedding Moment</h3>
    </div>
</div>
```

## 🚀 **For Deployment**

When uploading to Vercel/Netlify/any hosting:
1. **Include the entire `images` folder** with your project
2. **Maintain the folder structure** exactly as shown
3. **All images will be automatically deployed** with your website

## 🔧 **Fallback System**

The website is designed with fallbacks:
- If an image doesn't load, it shows a placeholder with an icon
- This ensures your site always looks professional even during image loading

## 📝 **Quick Checklist Before Deployment**

- [ ] All image folders created
- [ ] Images optimized and compressed
- [ ] Filenames match HTML references exactly
- [ ] Images load correctly in local testing
- [ ] All images under 500KB each
- [ ] Hero image is 400x500px (3:4 ratio)
- [ ] Gallery images are consistent sizes

## 💡 **Pro Tips**

1. **Use a consistent editing style** across all photos
2. **Watermark your images** to protect your work
3. **Create different sizes** for different devices (responsive images)
4. **Keep original high-res versions** separate for print sales
5. **Update images regularly** to keep portfolio fresh

---

Your photography portfolio is now ready to showcase your amazing work! 📸✨
