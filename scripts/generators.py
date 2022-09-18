import math

class SteamBoiler:
    
    def __init__(self, maxSU=1024, minSU=0) -> None:
        self.maxSU = maxSU
        self.minSU = minSU

    def get_su_output(self, waterInput):
        return waterInput * (self.maxSU/self.maxSU)
    
class HandCrank:
    pass

class FurnaceGenerator:
    pass

class Windmill:

    def __init__(self, maxSU=1024, minSU=0) -> None:
        self.maxSU = maxSU
        self.minSU = minSU

    def get_su_output(self, isInside, yHeight) -> int:
        if isInside: return math.floor(0.2(self.maxSU**yHeight//self.maxSU + 1))
        else: return math.floor((self.maxSU**yHeight//self.maxSU + 1))

if __name__ == "__main__":
    windmill = Windmill(1024, 0)
    print(windmill.get_su_output(isInside=True, yHeight=255))
    print(windmill.get_su_output(isInside=False, yHeight=255))

    print(windmill.get_su_output(isInside=True, yHeight=10))
    print(windmill.get_su_output(isInside=False, yHeight=10))