export default defineEventHandler(
  () =>
    'This route can only be accessed when there is no trailing slash in the URL.'
);
