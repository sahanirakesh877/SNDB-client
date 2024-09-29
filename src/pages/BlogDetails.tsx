import React from "react";

const BlogDetails: React.FC = () => {

 
  return (
    <>
      <div className="flex flex-col bg-blue-600">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Blog Title Here
            </h1>
            <p className="text-gray-600">Published on April 4, 2023</p>
          </div>
        </div>
        <div className="bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4 ">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                alt="Blog Featured Image "
                className="mb-2 rounded-lg"
              />
              <div className="prose max-w-none">
                <p className="text-justify ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed sit amet feugiat eros, eget eleifend dolor.
                  Proin maximus bibendum felis, id fermentum odio vestibulum id.
                  Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla
                  ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget
                  leo nec nibh mollis consectetur.
                </p>
                <p className="text-justify ">
                  Suspendisse potenti. Mauris euismod, magna sit amet aliquam
                  dapibus, ex sapien porta nisl, vel auctor orci velit in risus.
                  Fusce gravida bibendum dui, id volutpat felis dignissim a.
                  Duis sagittis, arcu ac convallis bibendum, neque dolor
                  suscipit dolor, non malesuada magna orci a mauris. Proin
                  sollicitudin diam eu enim tincidunt dapibus. Aliquam pharetra
                  purus mauris, id lacinia mi malesuada ut. Integer dignissim,
                  urna nec scelerisque feugiat, lacus sapien tincidunt sem, sed
                  luctus enim libero vel nunc. Vivamus ornare, felis quis
                  feugiat luctus, orci justo auctor urna, et elementum orci
                  dolor ac ante. Ut varius sapien nec fringilla sodales.
                  Suspendisse lacinia, metus eu suscipit lobortis, enim sapien
                  commodo sapien, non facilisis urna elit eget elit.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <div className="bg-gray-100 p-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase">
                  Categories
                </h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Category 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Category 2
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Category 3
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Category 4
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase">
                  Recent Posts
                </h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog Post 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog Post 2
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog Post 3
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog Post 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
