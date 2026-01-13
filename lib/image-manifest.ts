// Image manifest - categorized after analyzing all images in /assets folder

export interface ImageAsset {
  filename: string;
  alt: string;
  category: 'floor-leveling' | 'hardwood' | 'stairs' | 'repair' | 'vinyl' | 'hero' | 'equipment';
  type: 'residential' | 'commercial' | 'both' | 'n/a';
  stage: 'before' | 'after' | 'during' | 'finished' | 'n/a';
  pages: string[]; // Array of pages where this image should appear
}

export const images: ImageAsset[] = [
  // Floor Leveling Images
  {
    filename: 'floor-leveling-vancouver-Promark-Flooring.jpg',
    alt: 'Professional floor leveling service with self-leveling compound in Vancouver waterfront property',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['home', 'floor-leveling', 'gallery', 'residential']
  },
  {
    filename: 'floor-leveling-vancouver-Promark-Flooring-2.jpg',
    alt: 'Floor leveling process showing smooth self-leveling compound application in Vancouver',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery']
  },
  {
    filename: 'floor-leveling-vancouver-Promark-Flooring-3.jpg',
    alt: 'Commercial floor leveling project in progress in Greater Vancouver area',
    category: 'floor-leveling',
    type: 'commercial',
    stage: 'during',
    pages: ['floor-leveling', 'gallery', 'commercial']
  },
  {
    filename: 'floor-leveling-vancouver-Promark-Flooring-4.jpg',
    alt: 'Professional floor leveling showing perfectly smooth surface preparation',
    category: 'floor-leveling',
    type: 'both',
    stage: 'during',
    pages: ['floor-leveling', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling.jpg',
    alt: 'Floor leveling expertise demonstrated in Vancouver BC project',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-7.jpg',
    alt: 'Self-leveling compound application for uneven floor correction',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-9.jpg',
    alt: 'Floor leveling process showing surface preparation work',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-10.jpg',
    alt: 'Professional floor leveling creating perfectly level surface',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-14.jpg',
    alt: 'Floor leveling compound curing in Vancouver residential project',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-Vancouver-4-1.jpg',
    alt: 'Vancouver floor leveling service showing expert application',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-Vancouver-10-1.jpg',
    alt: 'Floor leveling project in Vancouver showing smooth finish',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-Vancouver-13.jpg',
    alt: 'Professional floor leveling in Vancouver BC residential property',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-Vancouver-14.jpg',
    alt: 'Expert floor leveling service demonstrating quality workmanship',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-floor-leveling-Vancouver-17.jpg',
    alt: 'Floor leveling in Vancouver showing precise surface correction',
    category: 'floor-leveling',
    type: 'residential',
    stage: 'during',
    pages: ['floor-leveling', 'gallery', 'vancouver']
  },

  // Hardwood Flooring Installation Images
  {
    filename: 'hardwood-flooring-vancouver-Promark-Flooring.jpg',
    alt: 'Beautiful hardwood flooring installation in Vancouver residential home with natural oak finish',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['home', 'hardwood-installation', 'gallery', 'residential']
  },
  {
    filename: 'hardwood-flooring-vancouver-Promark-Flooring-2.jpg',
    alt: 'Professional hardwood floor installation showing quality craftsmanship in Vancouver',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'hardwood-flooring-vancouver-Promark-Flooring-3.jpg',
    alt: 'Newly installed hardwood flooring with stunning grain patterns',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-2.jpg',
    alt: 'Expert hardwood flooring installation in Greater Vancouver home',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-3.jpg',
    alt: 'Quality hardwood floor installation demonstrating professional results',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-5.jpg',
    alt: 'Beautiful hardwood flooring adding warmth and value to Vancouver home',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-6.jpg',
    alt: 'Professional hardwood floor installation with precision and care',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-9.jpg',
    alt: 'Hardwood flooring installation showcasing natural wood beauty',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-13.jpg',
    alt: 'Newly installed hardwood floors in Vancouver residential property',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-20.jpg',
    alt: 'Quality hardwood flooring installation by PROMARK FLOORING experts',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-4.jpg',
    alt: 'Hardwood flooring installation process in Vancouver home',
    category: 'hardwood',
    type: 'residential',
    stage: 'during',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-5.jpg',
    alt: 'Professional hardwood installation showing expert craftsmanship',
    category: 'hardwood',
    type: 'residential',
    stage: 'during',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-6.jpg',
    alt: 'Hardwood floor installation demonstrating quality workmanship',
    category: 'hardwood',
    type: 'residential',
    stage: 'during',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-11.jpg',
    alt: 'Expert hardwood flooring installation in progress',
    category: 'hardwood',
    type: 'residential',
    stage: 'during',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-19.jpg',
    alt: 'Professional hardwood installation by experienced craftsmen',
    category: 'hardwood',
    type: 'residential',
    stage: 'during',
    pages: ['hardwood-installation', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-2.jpg',
    alt: 'Hardwood flooring installation in Vancouver showing precision work',
    category: 'hardwood',
    type: 'residential',
    stage: 'during',
    pages: ['hardwood-installation', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-3.jpg',
    alt: 'Vancouver hardwood installation project demonstrating expertise',
    category: 'hardwood',
    type: 'residential',
    stage: 'during',
    pages: ['hardwood-installation', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-7.jpg',
    alt: 'Quality hardwood flooring installation in Vancouver BC',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-8.jpg',
    alt: 'Beautiful hardwood floors installed in Vancouver home',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-10.jpg',
    alt: 'Professional hardwood flooring in Vancouver residential property',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-11.jpg',
    alt: 'Expert hardwood installation creating stunning Vancouver interior',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-14.jpg',
    alt: 'Hardwood flooring adding elegance to Vancouver home',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery', 'vancouver']
  },
  {
    filename: 'PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-16.jpg',
    alt: 'Quality hardwood flooring installation in Greater Vancouver',
    category: 'hardwood',
    type: 'residential',
    stage: 'finished',
    pages: ['hardwood-installation', 'gallery', 'vancouver']
  },

  // Staircase Images
  {
    filename: 'PROMARK-FLOORING-stairs.jpg',
    alt: 'Beautiful hardwood staircase installation with natural oak finish in Vancouver home',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['home', 'stairs', 'gallery', 'residential']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-3.jpg',
    alt: 'Professional staircase installation showing quality craftsmanship',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-4.jpg',
    alt: 'Hardwood stairs adding elegance to Vancouver residential property',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-5.jpg',
    alt: 'Expert staircase installation with beautiful hardwood treads',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-9.jpg',
    alt: 'Professional hardwood staircase creating stunning focal point',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-10.jpg',
    alt: 'Quality staircase installation demonstrating precision work',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-11.jpg',
    alt: 'Hardwood stairs expertly installed in Vancouver home',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-12.jpg',
    alt: 'Beautiful staircase renovation showing professional results',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-13.jpg',
    alt: 'Expert hardwood staircase installation in Greater Vancouver',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },
  {
    filename: 'PROMARK-FLOORING-stairs-14.jpg',
    alt: 'Professional staircase work creating elegant home feature',
    category: 'stairs',
    type: 'residential',
    stage: 'finished',
    pages: ['stairs', 'gallery']
  },

  // Vinyl Flooring Images
  {
    filename: 'vinyl-flooring-vancouver-Promark-Flooring.jpg',
    alt: 'Professional vinyl flooring installation in Vancouver residential property',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'vinyl-flooring-vancouver-Promark-Flooring-2.jpg',
    alt: 'Quality vinyl flooring creating beautiful living space in Vancouver',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver.jpg',
    alt: 'Expert vinyl flooring installation in Greater Vancouver home',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-2.jpg',
    alt: 'Vinyl flooring installation demonstrating professional workmanship',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-4.jpg',
    alt: 'Quality vinyl flooring adding value to Vancouver property',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-8.jpg',
    alt: 'Professional vinyl floor installation in Vancouver BC',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-9.jpg',
    alt: 'Vinyl flooring installation creating modern interior',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-10.jpg',
    alt: 'Expert vinyl flooring work in Greater Vancouver area',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-11.jpg',
    alt: 'Quality vinyl flooring installation by PROMARK FLOORING',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-13.jpg',
    alt: 'Professional vinyl floor installation in Vancouver home',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-14.jpg',
    alt: 'Vinyl flooring creating beautiful and durable surface',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
  {
    filename: 'PROMARK-FLOORING-vinyl-flooring-vancouver-15.jpg',
    alt: 'Expert vinyl flooring installation in Vancouver BC',
    category: 'vinyl',
    type: 'residential',
    stage: 'finished',
    pages: ['gallery']
  },
];

// Helper function to get images by category
export const getImagesByCategory = (category: ImageAsset['category']): ImageAsset[] => {
  return images.filter(img => img.category === category);
};

// Helper function to get images by page
export const getImagesByPage = (page: string): ImageAsset[] => {
  return images.filter(img => img.pages.includes(page));
};

// Helper function to get images by type
export const getImagesByType = (type: ImageAsset['type']): ImageAsset[] => {
  return images.filter(img => img.type === type);
};

// Get hero images for homepage
export const getHeroImages = (): ImageAsset[] => {
  return [
    images.find(img => img.filename === 'floor-leveling-vancouver-Promark-Flooring.jpg'),
    images.find(img => img.filename === 'hardwood-flooring-vancouver-Promark-Flooring.jpg'),
    images.find(img => img.filename === 'PROMARK-FLOORING-stairs.jpg'),
  ].filter(Boolean) as ImageAsset[];
};
