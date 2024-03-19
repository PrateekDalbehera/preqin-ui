const BRAND_NAME = "Preqin";

const AppFooter = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full text-center bg-[#1B0756] text-white border-t-4 border-[#D10077] py-2">
      <div className="container mx-auto text-center">
        <p>
          {`© ${new Date().getFullYear()}`} <span className="capitalize">{`${BRAND_NAME}`}</span> {`Ltd. All rights reserved.`}
        </p>
      </div>
    </div>
  );
};

  export default AppFooter;