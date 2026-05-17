export default function Home() {
  return (
    <main className="w-screen h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          广州绘画地图
        </h1>

        <p className="mt-4 text-gray-300">
          把画留在你到过的地方
        </p>

        <img
          src="/guangzhou-tower.jpg"
          alt="广州塔"
          className="w-96 mt-8 rounded-xl"
        />
      </div>
    </main>
  )
}