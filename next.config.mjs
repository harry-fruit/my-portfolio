import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ["./src/styles"],
    }
};

export default withNextIntl(nextConfig);
