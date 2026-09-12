const SKELETON_HEIGHTS = [280, 320, 220, 350, 260, 300, 240, 380];

function ImageSkeletonItem({ height }: { height: string }) {
  return (
    <div
      className="mb-3 w-full animate-pulse rounded-md bg-gray-200 duration-500"
      style={{ height: `${height}` }}
    />
  );
}

function ImageGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <section className="animate-fadeIn my-4 columns-1 p-4 *:mb-3 *:w-full sm:w-[90%] sm:columns-2 md:columns-3 lg:columns-4">
      {Array.from({ length: count }).map((_, i) => (
        <ImageSkeletonItem
          key={i}
          height={`${SKELETON_HEIGHTS[i % SKELETON_HEIGHTS.length]}px`}
        />
      ))}
    </section>
  );
}

export { ImageGridSkeleton, ImageSkeletonItem };
