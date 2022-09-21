from abc import abstractmethod
from typing import Any

class Tool:
    
    def __init__(self, toolType, modiferComponents, parts, generatorType) -> None:
        # Tool Info
        self.tooltype = toolType
        self.generatorType = generatorType
        self.modifierComponents = modiferComponents
        self.parts = parts

        # Stats
                      # 1 = Default/Vanilla
        self.toolSpeed = 1
        self.toolRange = 1
        # Attack damage
        self.toolDamage = 1
        # Pickup range
        self.toolRadius = 1
        # SU usage
        self.toolEfficiency =1

    def __repr__(self) -> str:
        return f"Tool Type: {self.tooltype},\n Modifier Components: {self.modifierComponents}"

    def __call__(self, *args: Any, **kwds: Any) -> Any:
        pass
    
    @abstractmethod
    def check_modifier_is_valid(toolType) -> bool:
        pass

    def switch_tool_type(self, toolType, *args, **kwargs) -> None:
        self.tooltype = toolType

    def add_modifier(self, modfierComponent, *args, **kwargs) -> None:
        self.modifierComponents.append(modfierComponent)

    def remove_modifier(self, modifierComponent, *args, **kwargs) -> None:
        self.modifierComponents.pop(self.modifierComponents.index(modifierComponent))

class Drill(Tool):
    def __init__(self) -> None:
        super().__init__("Drill")

class Harvester:
    pass

class Saw:
    pass

class Deployer:
    pass

class Plough:
    pass

class PotatoCannon:
    pass