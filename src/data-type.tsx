type Str = string;
type Num = number;

interface UnsplashLinks {
  self: Str;
  html: Str;
  download: Str;
  download_location: Str;
}

interface UnsplashUserLinks {
  self: Str;
  html: Str;
  photos: Str;
  likes: Str;
}

interface UnsplashSocial {
  instagram_username: Str | null;
  portfolio_url: Str | null;
  twitter_username: Str | null;
  paypal_email: Str | null;
}

interface UnsplashProfileImage {
  small: Str;
  medium: Str;
  large: Str;
}

interface UnsplashUser {
  id: Str;
  username: Str;
  name: Str;
  first_name: Str;
  last_name: Str;
  bio: Str | null;
  location: Str | null;
  instagram_username: Str | null;
  twitter_username: Str | null;
  portfolio_url: Str | null;
  for_hire: boolean;
  accepted_tos: boolean;
  total_collections: Num;
  total_likes: Num;
  total_photos: Num;
  total_illustrations: Num;
  total_promoted_photos: Num;
  total_promoted_illustrations: Num;
  total_free_photos: Num;
  total_free_illustrations: Num;
  updated_at: Str;
  links: UnsplashUserLinks;
  profile_image: UnsplashProfileImage;
  social: UnsplashSocial;
}

interface UnsplashUrls {
  raw: Str;
  full: Str;
  regular: Str;
  small: Str;
  small_s3: Str;
  thumb: Str;
}

interface AlternativeSlugs {
  de: Str;
  en: Str;
  es: Str;
  fr: Str;
  id: Str;
  it: Str;
  ja: Str;
  ko: Str;
  pt: Str;
}

interface UnsplashImage {
  id: Str;
  slug: Str;
  created_at: Str;
  updated_at: Str;
  promoted_at: Str | null;
  width: Num;
  height: Num;
  color: Str;
  blur_hash: Str;
  description: Str | null;
  short_description: Str | null;
  alt_description: Str;
  alternative_slugs: AlternativeSlugs;
  breadcrumbs: unknown[];
  urls: UnsplashUrls;
  links: UnsplashLinks;
  likes: Num;
  liked_by_user: boolean;
  current_user_collections: unknown[];
  bookmarked: boolean;
  sponsorship: unknown | null;
  topic_submissions: unknown;
  asset_type: Str;
  user: UnsplashUser;
}

interface CollectionImg {
  id: Str;
  alt: Str;
  urls: {
    regular: Str;
    small: Str;
    thumb: string;
  };
}

interface Collection {
  id: Str;
  title: Str;
  images: CollectionImg[];
}

export { type UnsplashImage, type Collection, type CollectionImg };
