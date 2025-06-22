
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import Img from './../../common/Img';
import InteractiveBackground from './InteractiveBackground';


function Template({ title, description1, description2, image, formType }) {
  // const { loading } = useSelector((state) => state.auth);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] relative">
      {/* Interactive Animated Background */}
      <InteractiveBackground />

      {/* Content */}
      <div className="auth-container mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 form-glass-container">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] theme-text-primary">
            {title}
          </h1>
          <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <span className="theme-text-secondary">{description1}</span>{" "}
            <span className="font-edu-sa font-bold italic theme-text-primary">
              {description2}
            </span>
          </p>

          {formType === "signup" ? <SignupForm /> : <LoginForm />}
        </div>


        <div className="relative max-w-[550px] md:mx-0 my-0">
          <Img
            src={image}
            alt={formType}
            className={' min-w-[105%] h-full text-white'}
          />
        </div>
      </div>
    </div>
  )
}

export default Template