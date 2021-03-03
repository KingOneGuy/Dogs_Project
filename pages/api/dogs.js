// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// GET /api/dogs

export default (req, res) => {
  res.statusCode = 200;
  setTimeout(
    () =>
      res.json({
        dogs: [
          {
            src: '/images/dog1.png',
            name: 'Verus',
            description: 'Likes to take siestas',
          },
          { src: '/images/dog2.png', name: 'Apollonius' },
          {
            src: '/images/dog3.png',
            name: 'Sextus',
            description: 'Likes to hunt',
          },
          { src: '/images/dog4.png', name: 'Fronto' },
          { src: '/images/dog5.png', name: 'Catulus' },
          {
            src: '/images/dog6.png',
            name: 'Rusticus',
            description: 'Likes to make friends',
          },
          { src: '/images/dog7.png', name: 'Maximus' },
          { src: '/images/dog8.png', name: 'Dion' },
          {
            src: '/images/dog9.png',
            name: 'Brutus',
            description: 'Scared of cats',
          },
        ],
      }),
    500
  );
};
