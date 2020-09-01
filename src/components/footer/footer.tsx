import React from 'react';

import './footer.scss';

export default function Footer() {
  const commitHash =
    import.meta.env.SNOWPACK_PUBLIC_IS_VERCEL === '1'
      ? import.meta.env.SNOWPACK_PUBLIC_VERCEL_COMMIT_SHA
      : import.meta.env.SNOWPACK_PUBLIC_GIT_SHA; // hopefully works

  return (
    <footer>
      <h6>gmail-deliveries-forwarding</h6>
      <p>
        Version: {import.meta.env.SNOWPACK_PUBLIC_VERSION}, Commit:{' '}
        {typeof commitHash === 'string'
          ? commitHash.substring(0, 7)
          : commitHash}
        <br />
        Build date:{' '}
        <span
          title={new Date(
            import.meta.env.SNOWPACK_PUBLIC_BUILD_DATE,
          ).toUTCString()}
        >
          {new Date(
            import.meta.env.SNOWPACK_PUBLIC_BUILD_DATE,
          ).toLocaleDateString()}
        </span>
      </p>
    </footer>
  );
}
