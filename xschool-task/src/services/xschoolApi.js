export async function getXSchoolData() {
  const res = await fetch("https://admin.wemark.pro/api/tasks-xschool/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}