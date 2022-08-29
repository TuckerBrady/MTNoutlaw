import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'rj79se6o',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skUU6RLNgLEgyZYJLlmJFXb9n5NUyLGBWD60Bj30fl559YxR7RpzOB7eFrI43x32VhIuaTIGXBOuVzOtJSRJTP8OHqLaQJXTuvGGtbjsmg7BxRdKqopBOfpNT5o2e03ZwqTH82E9HLavnnlrpLweSmcz4Zmn5Pdur7ULgMaNFTYceRnNdkix',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);