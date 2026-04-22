const lucide = require('lucide-react');
const icons = Object.keys(lucide);
console.log('Social-ish icons:', icons.filter(k => 
  k.includes('Insta') || 
  k.includes('Link') || 
  k.includes('Face') || 
  k.includes('Twitter') || 
  k.includes('Social')
));
