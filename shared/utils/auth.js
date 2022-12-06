export const getRedirectToBasedOnProfile = (profileType) => {
  if (profileType === 'Guru') return '/guru';
  if (profileType === 'Santri') return '/santri';
  if (profileType === 'Admin') return '/admin';

  return '/';
};
