namespace mod09API.Models;
public static class DbInitializer
{
    public static void Initialize(MeetingRoomContext context)
    {
        context.Database.EnsureCreated();   // 對DB是否存在進行判斷與創建
        if (context.MeetingRooms.Any()) return;
        MeetingRoom[] mrList = {
            new MeetingRoom
            {
                Name = "馬德里",
                Size = 10,
                Projector = true,
                TV = false
            },
            new MeetingRoom
            {
                Name = "里約",
                Size = 100,
                Projector = true,
                TV = true
            },
            new MeetingRoom
            {
                Name = "哥多華",
                Size = 200,
                Projector = true,
                TV = true
            },
            new MeetingRoom
            {
                Name = "巴塞隆納",
                Size = 50,
                Projector = false,
                TV = true
            },
            new MeetingRoom
            {
                Name = "耶路撒冷",
                Size = 50,
                Projector = false,
                TV = true
            },
        };
        context.MeetingRooms.AddRange(mrList); // 還在記憶體中
        context.SaveChanges(); // 實際存入DB
    }
}