import React, { Suspense } from 'react';

const Footer = React.lazy(() => import('../footer/footer'));

//import './homepage.scss';

export default function Homepage() {
  return (
    <>
      <main>
        <r-grid columns="8">
          <r-cell span="row">
            <p>Aenean fringilla velit sit amet elit fringilla pulvinar. Donec eu elit et nulla ultrices mollis a ut nulla. Duis laoreet quam ante, a viverra orci lobortis et. Sed dignissim nisi ac eleifend condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec aliquet nunc ac nunc venenatis egestas. Cras fermentum lacinia orci, quis semper turpis venenatis non. In porta turpis malesuada commodo semper. Sed est augue, efficitur at aliquam non, faucibus at est. Ut feugiat eu nulla a ornare.</p>
            <p>Curabitur rhoncus nec dui sit amet tincidunt. Phasellus accumsan augue et ante sodales rhoncus. Curabitur et nisi non nunc auctor sollicitudin sed bibendum velit. Cras pellentesque tempus ante quis lobortis. Donec sollicitudin dapibus enim, nec tempus justo condimentum ut. Donec interdum neque justo, vitae malesuada elit posuere ut. Duis et leo vel ligula venenatis porttitor. Proin pellentesque tristique sapien posuere semper. Morbi felis magna, luctus nec tempor at, luctus eu ante. Etiam nec est mauris. Morbi elementum pellentesque nisi vitae tincidunt. Praesent dapibus massa et tellus vulputate dignissim. </p>
          </r-cell>
        </r-grid>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
